import express from 'express'
import cors from 'cors'

const app = express()

const pharmacies = [
    {
        id: 1,
        name: 'Farmacia San Rafael',
        distance: '150 meters',
        address: 'Calle Principal 123, Ciudad Saludable'
    },
    {
        id: 2,
        name: 'Farmacia La Salud',
        distance: '120 meters',
        address: 'Avenida Central 456, Ciudad Saludable'
    },
    {
        id: 3,
        name: 'Farmacia Santa Clara',
        distance: '200 meters',
        address: 'Calle Secundaria 789, Ciudad Saludable'
    },
    {
        id: 4,
        name: 'Pharmacy Express',
        distance: '180 meters',
        address: 'Avenida Principal 234, Ciudad Saludable'
    },
    {
        id: 5,
        name: 'Healthy Living Pharmacy',
        distance: '160 meters',
        address: 'Calle Salud 567, Ciudad Saludable'
    },
    {
        id: 6,
        name: 'Farmacia Esperanza',
        distance: '130 meters',
        address: 'Avenida Salud 789, Ciudad Saludable'
    },
    {
        id: 7,
        name: 'Wellness Pharmacy',
        distance: '170 meters',
        address: 'Calle Bienestar 890, Ciudad Saludable'
    },
    {
        id: 8,
        name: 'Farmacia Moderna',
        distance: '140 meters',
        address: 'Avenida Modernidad 345, Ciudad Saludable'
    },
    {
        id: 9,
        name: 'City Pharmacy',
        distance: '190 meters',
        address: 'Calle Ciudad 678, Ciudad Saludable'
    },
    {
        id: 10,
        name: 'Healthy Choice Pharmacy',
        distance: '110 meters',
        address: 'Avenida Elección 123, Ciudad Saludable'
    },
    {
        id: 11,
        name: 'Farmacia Salud y Vida',
        distance: '175 meters',
        address: 'Calle Vida 456, Ciudad Saludable'
    },
    {
        id: 12,
        name: 'Sunshine Pharmacy',
        distance: '160 meters',
        address: 'Avenida Sol 789, Ciudad Saludable'
    },
    {
        id: 13,
        name: 'Farmacia Vital',
        distance: '130 meters',
        address: 'Calle Vital 567, Ciudad Saludable'
    },
    {
        id: 14,
        name: 'Pain Relief Pharmacy',
        distance: '180 meters',
        address: 'Avenida Alivio 890, Ciudad Saludable'
    },
    {
        id: 15,
        name: 'Clear Health Pharmacy',
        distance: '150 meters',
        address: 'Calle Clara 234, Ciudad Saludable'
    }
]

const medicines = [
    {
        id: 1,
        name: 'Paracetamol 500mg',
        price: 8500,
        pharmacy: {
            id: 15,
            name: 'Farmacia Salud Clara',
            distance: '150 metros',
            address: 'Calle Clara 234, Ciudad Saludable'
        }
    },
    {
        id: 2,
        name: 'Ibuprofeno 400mg',
        price: 9500,
        pharmacy: {
            id: 5,
            name: 'Farmacia Vida Sana',
            distance: '160 metros',
            address: 'Calle Salud 567, Ciudad Saludable'
        }
    },
    {
        id: 3,
        name: 'Omeprazol 20mg',
        price: 7500,
        pharmacy: {
            id: 3,
            name: 'Farmacia Santa Clara',
            distance: '200 metros',
            address: 'Calle Secundaria 789, Ciudad Saludable'
        }
    },
    {
        id: 4,
        name: 'Aspirina 100mg',
        price: 7000,
        pharmacy: {
            id: 4,
            name: 'Farmacia Expresa',
            distance: '180 metros',
            address: 'Avenida Principal 234, Ciudad Saludable'
        }
    },
    {
        id: 5,
        name: 'Cetirizina 10mg',
        price: 8900,
        pharmacy: {
            id: 8,
            name: 'Farmacia Vida Saludable',
            distance: '160 metros',
            address: 'Calle Salud 567, Ciudad Saludable'
        }
    },
    {
        id: 6,
        name: 'Amoxicilina 250mg',
        price: 12000,
        pharmacy: {
            id: 6,
            name: 'Farmacia de la Esperanza',
            distance: '130 metros',
            address: 'Avenida Salud 789, Ciudad Saludable'
        }
    },
    {
        id: 7,
        name: 'Loratadina 5mg',
        price: 9800,
        pharmacy: {
            id: 7,
            name: 'Farmacia del Bienestar',
            distance: '170 metros',
            address: 'Calle Bienestar 890, Ciudad Saludable'
        }
    },
    {
        id: 8,
        name: 'Simvastatina 20mg',
        price: 10500,
        pharmacy: {
            id: 9,
            name: 'Farmacia Moderna',
            distance: '140 metros',
            address: 'Avenida Modernidad 345, Ciudad Saludable'
        }
    },
    {
        id: 9,
        name: 'Metformina 500mg',
        price: 8800,
        pharmacy: {
            id: 10,
            name: 'Farmacia de la Ciudad',
            distance: '190 metros',
            address: 'Calle Ciudad 678, Ciudad Saludable'
        }
    },
    {
        id: 10,
        name: 'Ciprofloxacina 250mg',
        price: 11500,
        pharmacy: {
            id: 11,
            name: 'Farmacia Elección Saludable',
            distance: '110 metros',
            address: 'Avenida Elección 123, Ciudad Saludable'
        }
    },
    {
        id: 11,
        name: 'Diclofenaco 50mg',
        price: 9200,
        pharmacy: {
            id: 12,
            name: 'Farmacia Salud y Vida',
            distance: '175 metros',
            address: 'Calle Vida 456, Ciudad Saludable'
        }
    },
    {
        id: 12,
        name: 'Hidroclorotiazida 12.5mg',
        price: 10800,
        pharmacy: {
            id: 13,
            name: 'Farmacia del Sol',
            distance: '160 metros',
            address: 'Avenida Sol 789, Ciudad Saludable'
        }
    },
    {
        id: 13,
        name: 'Ranitidina 150mg',
        price: 8600,
        pharmacy: {
            id: 14,
            name: 'Farmacia Vital',
            distance: '130 metros',
            address: 'Calle Vital 567, Ciudad Saludable'
        }
    },
    {
        id: 14,
        name: 'Morfina 10mg',
        price: 15000,
        pharmacy: {
            id: 1,
            name: 'Farmacia Alivio del Dolor',
            distance: '180 metros',
            address: 'Avenida Alivio 890, Ciudad Saludable'
        }
    },
    {
        id: 15,
        name: 'Claritromicina 500mg',
        price: 9800,
        pharmacy: {
            id: 2,
            name: 'Farmacia Salud Clara',
            distance: '150 metros',
            address: 'Calle Clara 234, Ciudad Saludable'
        }
    }
]

const medical_specialties = [
    {
        id: 1,
        treatment: 'Cirugía de Cataratas',
        clinic: {
            id: 101,
            distance: '140 metros',
            name: 'Clínica Oftalmológica',
            address: 'Calle Principal 123'
        }
    },
    {
        id: 2,
        treatment: 'Endodoncia',
        clinic: {
            id: 102,
            distance: '260 metros',
            name: 'Clínica Dental',
            address: 'Avenida Secundaria 456'
        }
    },
    {
        id: 3,
        treatment: 'Radiografía',
        clinic: {
            id: 103,
            distance: '180 metros',
            name: 'Centro de Diagnóstico',
            address: 'Calle Secundaria 789'
        }
    },
    {
        id: 4,
        treatment: 'Cirugía de Bypass',
        clinic: {
            id: 104,
            distance: '320 metros',
            name: 'Hospital Cardíaco',
            address: 'Avenida Principal 567'
        }
    },
    {
        id: 5,
        treatment: 'Resonancia Magnética',
        clinic: {
            id: 105,
            distance: '200 metros',
            name: 'Centro de Imágenes Médicas',
            address: 'Avenida Diagnóstica 678'
        }
    },
    {
        id: 6,
        treatment: 'Ortopedia',
        clinic: {
            id: 106,
            distance: '150 metros',
            name: 'Clínica Ortopédica',
            address: 'Calle de Rehabilitación 789'
        }
    },
    {
        id: 7,
        treatment: 'Ginecología',
        clinic: {
            id: 107,
            distance: '280 metros',
            name: 'Centro Ginecológico',
            address: 'Avenida Femenina 890'
        }
    },
    {
        id: 8,
        treatment: 'Neurocirugía',
        clinic: {
            id: 108,
            distance: '400 metros',
            name: 'Hospital Neurológico',
            address: 'Calle Cerebral 1234'
        }
    },
    {
        id: 9,
        treatment: 'Dermatología',
        clinic: {
            id: 109,
            distance: '180 metros',
            name: 'Centro Dermatológico',
            address: 'Avenida de la Piel 5678'
        }
    },
    {
        id: 10,
        treatment: 'Oftalmología Pediátrica',
        clinic: {
            id: 110,
            distance: '120 metros',
            name: 'Clínica Pediátrica Oftalmológica',
            address: 'Calle Infantil 910'
        }
    },
    {
        id: 11,
        treatment: 'Cardiología',
        clinic: {
            id: 111,
            distance: '300 metros',
            name: 'Centro Cardiológico',
            address: 'Avenida del Corazón 1112'
        }
    },
    {
        id: 12,
        treatment: 'Odontopediatría',
        clinic: {
            id: 112,
            distance: '240 metros',
            name: 'Clínica Odontopediátrica',
            address: 'Calle Dental Infantil 1314'
        }
    },
    {
        id: 13,
        treatment: 'Fisioterapia',
        clinic: {
            id: 113,
            distance: '180 metros',
            name: 'Centro de Rehabilitación Física',
            address: 'Avenida de la Recuperación 1516'
        }
    },
    {
        id: 14,
        treatment: 'Urología',
        clinic: {
            id: 114,
            distance: '260 metros',
            name: 'Centro Urológico',
            address: 'Calle del Tracto Urinario 1718'
        }
    },
    {
        id: 15,
        treatment: 'Endoscopia',
        clinic: {
            id: 115,
            distance: '190 metros',
            name: 'Centro de Endoscopia',
            address: 'Avenida Endoscópica 1920'
        }
    }
]

const doctors = [
    {
        id: 1,
        name: 'Dr. Juan Pérez',
        specialty: 'Cardiólogo',
        address: 'Calle Medicina 123, Ciudad A',
        distance: '130 metros'
    },
    {
        id: 2,
        name: 'Dra. María Rodríguez',
        specialty: 'Dermatóloga',
        address: 'Avenida de la Piel 456, Ciudad B',
        distance: '220 metros'
    },
    {
        id: 3,
        name: 'Dr. Carlos Gómez',
        specialty: 'Ortopedista',
        address: 'Calle de Rehabilitación 789, Ciudad C',
        distance: '180 metros'
    },
    {
        id: 4,
        name: 'Dra. Laura Martínez',
        specialty: 'Ginecóloga',
        address: 'Avenida Femenina 890, Ciudad D',
        distance: '250 metros'
    },
    {
        id: 5,
        name: 'Dr. Pedro Sánchez',
        specialty: 'Oftalmólogo',
        address: 'Calle de la Vista 567, Ciudad E',
        distance: '150 metros'
    },
    {
        id: 6,
        name: 'Dra. Ana López',
        specialty: 'Pediatra',
        address: 'Avenida de los Niños 234, Ciudad F',
        distance: '200 metros'
    },
    {
        id: 7,
        name: 'Dr. Luis Hernández',
        specialty: 'Neurólogo',
        address: 'Calle Cerebral 789, Ciudad G',
        distance: '300 metros'
    },
    {
        id: 8,
        name: 'Dra. Carmen Ruiz',
        specialty: 'Endocrinóloga',
        address: 'Avenida del Metabolismo 890, Ciudad H',
        distance: '170 metros'
    },
    {
        id: 9,
        name: 'Dr. Jorge Ramírez',
        specialty: 'Cirujano General',
        address: 'Calle Quirúrgica 1234, Ciudad I',
        distance: '280 metros'
    },
    {
        id: 10,
        name: 'Dra. Patricia Flores',
        specialty: 'Psiquiatra',
        address: 'Avenida Mental 5678, Ciudad J',
        distance: '240 metros'
    },
    {
        id: 11,
        name: 'Dr. Manuel Gutiérrez',
        specialty: 'Cardiólogo Pediátrico',
        address: 'Calle Pediátrica 910, Ciudad K',
        distance: '190 metros'
    },
    {
        id: 12,
        name: 'Dra. Silvia Ortega',
        specialty: 'Dermatopatóloga',
        address: 'Avenida Dermatológica 1112, Ciudad L',
        distance: '260 metros'
    },
    {
        id: 13,
        name: 'Dr. Martín Cruz',
        specialty: 'Geriatra',
        address: 'Calle de la Vejez 1314, Ciudad M',
        distance: '180 metros'
    },
    {
        id: 14,
        name: 'Dra. Rosa Mendoza',
        specialty: 'Otorrinolaringóloga',
        address: 'Avenida Auditiva 1516, Ciudad N',
        distance: '320 metros'
    },
    {
        id: 15,
        name: 'Dr. Diego Vargas',
        specialty: 'Traumatólogo',
        address: 'Calle del Trauma 1718, Ciudad O',
        distance: '210 metros'
    }
]

function paginateArray(arr, page = 1, size = 10) {
    const startIndex = (Number(page) - 1) * Number(size)
    const endIndex = startIndex + Number(size)
    return arr.slice(startIndex, endIndex)
}
//settings
app.set('port', 3001)

//middlewares
app.use(express.urlencoded({ extended: false, limit: '80mb' }))
app.use(express.json({limit: '80mb'}))
app.use(cors())

//endpoints
app.get('', (req, res) => { 
    res.status(404).json({ error: 'salud_app - resource not found' }) 
})

app.get('/pharmacies', (req, res) => {
    const { page, size } = req.query
    res.json({ page, size, result: paginateArray(pharmacies, page, size) }).status(200).end()
})

app.get('/medicines', (req, res) => {
    const { page, size } = req.query
    res.json({ page, size, result: paginateArray(medicines, page, size) }).status(200).end()
})

app.get('/medical_specialties', (req, res) => {
    const { page, size } = req.query
    res.json({ page, size, result: paginateArray(medical_specialties, page, size) }).status(200).end()
})

app.get('/doctors', (req, res) => {
    const { page, size } = req.query
    res.json({ page, size, result: paginateArray(doctors, page, size) }).status(200).end()
})

export default app