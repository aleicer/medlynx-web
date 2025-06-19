export const mockMedications = [
    {
        id: 1,
        nombre: "Acetaminofén 500mg",
        laboratorio: "Laboratorios MK",
        invima: "INVIMA 2015M-0015432",
        presentacion: "Tabletas x 100",
        requiereReceta: false,
        precioRegulado: 12500,
        descripcion:
            "El acetaminofén es un medicamento analgésico y antipirético utilizado para el tratamiento del dolor leve a moderado y la fiebre. Actúa inhibiendo la síntesis de prostaglandinas en el sistema nervioso central.",
        principioActivo: "Paracetamol (Acetaminofén)",
        concentracion: "500mg por tableta",
        formaFarmaceutica: "Tableta",
        viaAdministracion: "Oral",
        usos: [
            "Alivio del dolor leve a moderado",
            "Reducción de la fiebre",
            "Tratamiento sintomático de resfriados y gripe",
            "Alivio de dolores de cabeza y migrañas leves",
        ],
        tratamientos: [
            {
                condicion: "Dolor leve a moderado",
                descripcion: "1-2 tabletas cada 4-6 horas según sea necesario. No exceder 4000mg en 24 horas.",
            },
            {
                condicion: "Fiebre",
                descripcion: "1-2 tabletas cada 4-6 horas. No exceder 4000mg en 24 horas.",
            },
        ],
        eventosAdversos: {
            comunes: ["Náuseas", "Dolor abdominal", "Malestar general"],
            graves: ["Reacciones alérgicas graves", "Daño hepático con sobredosis", "Problemas renales con uso prolongado"],
        },
        advertencias:
            "No consumir con alcohol. No exceder la dosis recomendada. El uso prolongado o en dosis altas puede causar daño hepático grave. Consulte a su médico si el dolor persiste por más de 5 días o la fiebre por más de 3 días.",
        precios: [
            {
                farmacia: "Farmacia Cruz Verde",
                valor: 11800,
                disponible: true,
                actualizacion: "01/05/2025",
            },
            {
                farmacia: "Droguería Colsubsidio",
                valor: 12200,
                disponible: true,
                actualizacion: "02/05/2025",
            },
            {
                farmacia: "Farmatodo",
                valor: 12500,
                disponible: true,
                actualizacion: "03/05/2025",
            },
        ],
    },
    {
        id: 2,
        nombre: "Ibuprofeno 400mg",
        laboratorio: "Genfar",
        invima: "INVIMA 2016M-0012345",
        presentacion: "Tabletas x 50",
        requiereReceta: false,
        precioRegulado: 15800,
        descripcion:
            "El ibuprofeno es un medicamento antiinflamatorio no esteroideo (AINE) que se utiliza para reducir el dolor, la inflamación y la fiebre. Actúa inhibiendo la producción de prostaglandinas, sustancias que promueven la inflamación y el dolor.",
        principioActivo: "Ibuprofeno",
        concentracion: "400mg por tableta",
        formaFarmaceutica: "Tableta recubierta",
        viaAdministracion: "Oral",
        usos: [
            "Alivio del dolor moderado",
            "Reducción de la inflamación",
            "Tratamiento de la artritis",
            "Alivio de dolores menstruales",
            "Reducción de la fiebre",
        ],
        tratamientos: [
            {
                condicion: "Dolor e inflamación",
                descripcion: "1 tableta cada 6-8 horas según sea necesario. No exceder 1200mg en 24 horas.",
            },
            {
                condicion: "Fiebre",
                descripcion: "1 tableta cada 6-8 horas. No exceder 1200mg en 24 horas.",
            },
        ],
        eventosAdversos: {
            comunes: ["Malestar estomacal", "Acidez", "Náuseas", "Dolor de cabeza"],
            graves: ["Úlceras gástricas", "Sangrado gastrointestinal", "Problemas renales", "Reacciones alérgicas graves"],
        },
        advertencias:
            "Tomar con alimentos para reducir la irritación estomacal. No recomendado para personas con úlceras, problemas cardíacos o renales. Consulte a su médico antes de usar si está tomando otros medicamentos o tiene condiciones médicas preexistentes.",
        precios: [
            {
                farmacia: "Farmacia Cruz Verde",
                valor: 14500,
                disponible: true,
                actualizacion: "01/05/2025",
            },
            {
                farmacia: "Droguería Colsubsidio",
                valor: 15200,
                disponible: true,
                actualizacion: "02/05/2025",
            },
            {
                farmacia: "Farmatodo",
                valor: 15800,
                disponible: false,
                actualizacion: "03/05/2025",
            },
        ],
    },
    {
        id: 3,
        nombre: "Loratadina 10mg",
        laboratorio: "Tecnoquímicas",
        invima: "INVIMA 2017M-0023456",
        presentacion: "Tabletas x 30",
        requiereReceta: false,
        precioRegulado: 9800,
        descripcion:
            "La loratadina es un antihistamínico de segunda generación que alivia los síntomas de alergia como estornudos, picazón, secreción nasal y ojos llorosos. Actúa bloqueando la acción de la histamina, una sustancia natural que causa síntomas alérgicos.",
        principioActivo: "Loratadina",
        concentracion: "10mg por tableta",
        formaFarmaceutica: "Tableta",
        viaAdministracion: "Oral",
        usos: [
            "Alivio de síntomas de rinitis alérgica",
            "Tratamiento de urticaria crónica",
            "Alivio de reacciones alérgicas cutáneas",
            "Control de síntomas de alergia estacional",
        ],
        tratamientos: [
            {
                condicion: "Rinitis alérgica",
                descripcion: "1 tableta una vez al día.",
            },
            {
                condicion: "Urticaria",
                descripcion: "1 tableta una vez al día según sea necesario.",
            },
        ],
        eventosAdversos: {
            comunes: ["Somnolencia leve", "Sequedad bucal", "Dolor de cabeza", "Fatiga"],
            graves: ["Reacciones alérgicas graves", "Taquicardia", "Visión borrosa", "Confusión"],
        },
        advertencias:
            "Puede causar somnolencia en algunas personas. Evite conducir o manejar maquinaria pesada hasta conocer cómo le afecta. Consulte a su médico si está tomando otros medicamentos o tiene problemas hepáticos.",
        precios: [
            {
                farmacia: "Farmacia Cruz Verde",
                valor: 8900,
                disponible: true,
                actualizacion: "01/05/2025",
            },
            {
                farmacia: "Droguería Colsubsidio",
                valor: 9300,
                disponible: true,
                actualizacion: "02/05/2025",
            },
            {
                farmacia: "Farmatodo",
                valor: 9800,
                disponible: true,
                actualizacion: "03/05/2025",
            },
        ],
    },
    {
        id: 4,
        nombre: "Amoxicilina 500mg",
        laboratorio: "La Santé",
        invima: "INVIMA 2018M-0034567",
        presentacion: "Cápsulas x 60",
        requiereReceta: true,
        precioRegulado: 28500,
        descripcion:
            "La amoxicilina es un antibiótico de amplio espectro del grupo de las penicilinas. Se utiliza para tratar una variedad de infecciones bacterianas. Actúa inhibiendo la síntesis de la pared celular bacteriana.",
        principioActivo: "Amoxicilina",
        concentracion: "500mg por cápsula",
        formaFarmaceutica: "Cápsula",
        viaAdministracion: "Oral",
        usos: [
            "Tratamiento de infecciones respiratorias",
            "Tratamiento de infecciones del tracto urinario",
            "Tratamiento de infecciones de oído, nariz y garganta",
            "Tratamiento de infecciones de la piel",
        ],
        tratamientos: [
            {
                condicion: "Infecciones respiratorias",
                descripcion: "1 cápsula cada 8 horas durante 7-10 días según prescripción médica.",
            },
            {
                condicion: "Infecciones urinarias",
                descripcion: "1 cápsula cada 8 horas durante 3-7 días según prescripción médica.",
            },
        ],
        eventosAdversos: {
            comunes: ["Diarrea", "Náuseas", "Vómitos", "Dolor abdominal"],
            graves: [
                "Reacciones alérgicas graves",
                "Colitis pseudomembranosa",
                "Erupciones cutáneas graves",
                "Alteraciones hepáticas",
            ],
        },
        advertencias:
            "Requiere prescripción médica. No utilizar en caso de alergia a penicilinas. Completar el tratamiento completo aunque los síntomas mejoren. Puede reducir la eficacia de anticonceptivos orales.",
        precios: [
            {
                farmacia: "Farmacia Cruz Verde",
                valor: 26800,
                disponible: true,
                actualizacion: "01/05/2025",
            },
            {
                farmacia: "Droguería Colsubsidio",
                valor: 27500,
                disponible: true,
                actualizacion: "02/05/2025",
            },
            {
                farmacia: "Farmatodo",
                valor: 28500,
                disponible: true,
                actualizacion: "03/05/2025",
            },
        ],
    },
    {
        id: 5,
        nombre: "Losartán 50mg",
        laboratorio: "Procaps",
        invima: "INVIMA 2019M-0045678",
        presentacion: "Tabletas x 30",
        requiereReceta: true,
        precioRegulado: 18200,
        descripcion:
            "El losartán es un medicamento antihipertensivo que pertenece al grupo de los antagonistas de los receptores de angiotensina II (ARA II). Se utiliza para tratar la hipertensión arterial y proteger los riñones en pacientes con diabetes tipo 2.",
        principioActivo: "Losartán potásico",
        concentracion: "50mg por tableta",
        formaFarmaceutica: "Tableta recubierta",
        viaAdministracion: "Oral",
        usos: [
            "Tratamiento de la hipertensión arterial",
            "Protección renal en pacientes con diabetes tipo 2",
            "Reducción del riesgo de accidente cerebrovascular",
            "Tratamiento de la insuficiencia cardíaca",
        ],
        tratamientos: [
            {
                condicion: "Hipertensión",
                descripcion: "1 tableta una vez al día, preferiblemente a la misma hora cada día.",
            },
            {
                condicion: "Protección renal en diabetes",
                descripcion: "1 tableta una vez al día según prescripción médica.",
            },
        ],
        eventosAdversos: {
            comunes: ["Mareos", "Fatiga", "Dolor de cabeza", "Hipotensión"],
            graves: ["Hiperpotasemia", "Angioedema", "Insuficiencia renal", "Reacciones alérgicas graves"],
        },
        advertencias:
            "Requiere prescripción médica. No usar durante el embarazo. Monitorear la función renal y los niveles de potasio regularmente. No suspender el tratamiento sin consultar al médico.",
        precios: [
            {
                farmacia: "Farmacia Cruz Verde",
                valor: 16900,
                disponible: true,
                actualizacion: "01/05/2025",
            },
            {
                farmacia: "Droguería Colsubsidio",
                valor: 17500,
                disponible: true,
                actualizacion: "02/05/2025",
            },
            {
                farmacia: "Farmatodo",
                valor: 18200,
                disponible: true,
                actualizacion: "03/05/2025",
            },
        ],
    },
]
