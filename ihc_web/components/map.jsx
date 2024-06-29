'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function Map() {

    const mapRef = useRef(null)

    useEffect(() => {
        const initMap = async() => {
            const loader = new Loader({
                apiKey: 'AIzaSyD_vkcKgRHKbs5CHE2rXkDhNkK74PV7NSY',
                version: 'weekly'
            })
            const { Map } = await loader.importLibrary('maps')
            const { Marker } = await loader.importLibrary('marker')
            const position = {
                lat: 43.642693,
                lng: -79.3871189
            }
            const mapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }
            const map = new Map(mapRef.current, mapOptions)
            const marker = new Marker({ map, position })
        }   
        initMap()
    }, [])

    return (
        <div style={{ height: '600px' }} ref={mapRef} />
    )

}