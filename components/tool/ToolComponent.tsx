'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export default function ToolComponent() {
  const [tourniquetTime, setTourniquetTime] = useState(0)
  const [collectionTime, setCollectionTime] = useState(0)
  const [isTourniquetRunning, setIsTourniquetRunning] = useState(false)
  const [isCollectionRunning, setIsCollectionRunning] = useState(false)
  const [warning, setWarning] = useState('')
  const tourniquetRef = useRef<NodeJS.Timeout | null>(null)
  const collectionRef = useRef<NodeJS.Timeout | null>(null)

  const MAX_TOURNIQUET = 60 // 1 minute max recommended

  useEffect(() => {
    if (isTourniquetRunning) {
      tourniquetRef.current = setInterval(() => {
        setTourniquetTime(prev => {
          const newTime = prev + 1
          if (newTime >= MAX_TOURNIQUET) {
            setWarning('⚠️ Tourniquet time exceeded 1 minute! Release recommended.')
          } else if (newTime >= 45) {
            setWarning('⚠️ Approaching 1 minute limit')
          }
          return newTime
        })
      }, 1000)
    }
    return () => { if (tourniquetRef.current) clearInterval(tourniquetRef.current) }
  }, [isTourniquetRunning])

  useEffect(() => {
    if (isCollectionRunning) {
      collectionRef.current = setInterval(() => {
        setCollectionTime(prev => prev + 1)
      }, 1000)
    }
    return () => { if (collectionRef.current) clearInterval(collectionRef.current) }
  }, [isCollectionRunning])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const startTourniquet = () => {
    setIsTourniquetRunning(true)
    setWarning('')
  }

  const stopTourniquet = () => {
    setIsTourniquetRunning(false)
    setWarning('')
  }

  const startCollection = () => setIsCollectionRunning(true)
  const stopCollection = () => setIsCollectionRunning(false)

  const resetAll = () => {
    setIsTourniquetRunning(false)
    setIsCollectionRunning(false)
    setTourniquetTime(0)
    setCollectionTime(0)
    setWarning('')
  }

  const getTourniquetStatus = () => {
    if (tourniquetTime >= MAX_TOURNIQUET) return { color: 'bg-red-600', text: 'RELEASE NOW' }
    if (tourniquetTime >= 45) return { color: 'bg-orange-500', text: 'Warning' }
    if (tourniquetTime >= 30) return { color: 'bg-yellow-500', text: 'Caution' }
    return { color: 'bg-green-500', text: 'Safe' }
  }

  const status = getTourniquetStatus()

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg shadow-red-100/50 border border-red-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🩸</span> Blood Draw Timer
        </h2>

        {warning && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium animate-pulse-red">
            {warning}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tourniquet Timer */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Tourniquet Time</h3>
              <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${status.color}`}>
                {status.text}
              </span>
            </div>
            <div className={`text-5xl font-bold text-center mb-4 ${tourniquetTime >= MAX_TOURNIQUET ? 'text-red-600' : 'text-gray-800'}`}>
              {formatTime(tourniquetTime)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className={`h-3 rounded-full transition-all ${status.color}`}
                style={{ width: `${Math.min((tourniquetTime / MAX_TOURNIQUET) * 100, 100)}%` }}
              />
            </div>
            <div className="flex gap-2">
              {!isTourniquetRunning ? (
                <button onClick={startTourniquet} className="flex-1 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">
                  Start Tourniquet
                </button>
              ) : (
                <button onClick={stopTourniquet} className="flex-1 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors">
                  Release Tourniquet
                </button>
              )}
            </div>
          </div>

          {/* Collection Timer */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Collection Time</h3>
            <div className="text-5xl font-bold text-center mb-4 text-gray-800">
              {formatTime(collectionTime)}
            </div>
            <div className="text-center text-gray-500 mb-4">
              Total procedure duration
            </div>
            <div className="flex gap-2">
              {!isCollectionRunning ? (
                <button onClick={startCollection} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Start Collection
                </button>
              ) : (
                <button onClick={stopCollection} className="flex-1 py-3 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors">
                  Stop Collection
                </button>
              )}
            </div>
          </div>
        </div>

        <button onClick={resetAll} className="w-full mt-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
          Reset All Timers
        </button>
      </div>

      {/* Quick Reference */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Max Tourniquet', value: '1 min', icon: '⏱️', desc: 'Recommended limit' },
          { label: 'Ideal Draw', value: '< 30s', icon: '💉', desc: 'Per tube' },
          { label: 'Total Procedure', value: '3-5 min', icon: '📋', desc: 'Average time' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-red-100 text-center">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-2xl font-bold text-red-600">{item.value}</div>
            <div className="font-medium text-gray-800">{item.label}</div>
            <div className="text-sm text-gray-500">{item.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 rounded-xl p-4 border border-red-100">
        <p className="text-sm text-red-700">
          <strong>Safety Note:</strong> Prolonged tourniquet application (&gt;1 minute) can cause hemoconcentration and affect test results. Always follow your facility&apos;s protocols.
        </p>
      </div>
    </div>
  )
}
