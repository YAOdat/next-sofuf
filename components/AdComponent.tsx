'use client'

import { useEffect, useRef } from 'react'
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { useTheme } from 'next-themes'

const AdComponent: React.FC = () => {
  const adContainerRef = useRef<HTMLDivElement>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const { theme } = useTheme()
  
  useEffect(() => {
    if (!adContainerRef.current) return

    // Function to safely remove an element
    const safeRemove = (element: Element) => {
      try {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element)
        }
      } catch (error) {
        console.debug('Safe remove failed:', error)
      }
    }

    // Function to check if element is ad-related
    const isAdRelated = (element: HTMLElement): boolean => {
      if (element instanceof HTMLIFrameElement) {
        return element.src?.includes('scented-leather.com') || false
      }
      if (element instanceof HTMLDivElement) {
        return element.id?.includes('scented-leather') || false
      }
      return false
    }

    // Function to clean up any ads outside our container
    const cleanupExternalAds = () => {
      try {
        // Only remove ad-related elements
        const adElements = document.querySelectorAll('iframe, div')
        adElements.forEach(element => {
          if (element instanceof HTMLElement && 
              !adContainerRef.current?.contains(element) && 
              isAdRelated(element)) {
            safeRemove(element)
          }
        })
      } catch (error) {
        console.debug('Cleanup failed:', error)
      }
    }

    // Create a MutationObserver to watch for ad insertions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement && 
                !adContainerRef.current?.contains(node) && 
                isAdRelated(node)) {
              safeRemove(node)
            }
          })
        }
      })
    })

    // Start observing the document body
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    const script = document.createElement('script')
    scriptRef.current = script
    
    // Set up script properties
    script.async = true
    script.referrerPolicy = 'no-referrer-when-downgrade'
    script.src = "//scented-leather.com/b.XmV/sidoG/lO0GYwWidTiNYPWL5YuyZ/XpIA/Be/mR9NuJZQUvluk_PxTeUc3/M/DCEIxrNVj/IOtyNqTdcMwdMYTiEp2VMXwg"
    
    // Insert the script into the ad container
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script)
    }

    // Set up an interval for periodic cleanup
    const cleanupInterval = setInterval(cleanupExternalAds, 2000)

    // Clean up
    return () => {
      try {
        clearInterval(cleanupInterval)
        observer.disconnect()
        
        // Safely remove the script
        if (scriptRef.current && scriptRef.current.parentNode) {
          safeRemove(scriptRef.current)
        }
        
        // Final cleanup of any remaining ad elements
        cleanupExternalAds()
      } catch (error) {
        console.debug('Cleanup error:', error)
      }
    }
  }, [])

  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader className="flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700">
        <div className="flex flex-col items-center py-2">
          <p className="text-lg font-bold text-white">Sponsored Ad</p>
        </div>
      </CardHeader>
      <CardBody className="flex justify-center items-center p-4">
        <div 
          ref={adContainerRef}
          id="ad-script-placeholder"
          aria-live="polite"
          className="min-h-[100px] flex justify-center items-center w-full rounded-md bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
        />
      </CardBody>
    </Card>
  )
}

export default AdComponent

