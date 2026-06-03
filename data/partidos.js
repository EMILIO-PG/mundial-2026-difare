// ============================================================
//  DATOS MUNDIAL 2026 — grupos, equipos y partidos
//  Horarios en hora Ecuador (UTC-5)
// ============================================================

const GRUPOS = {
  A: { nombre: "Grupo A", equipos: ["México","Sudáfrica","Corea del Sur","República Checa"] },
  B: { nombre: "Grupo B", equipos: ["Canadá","Bosnia-Herzegovina","Qatar","Suiza"] },
  C: { nombre: "Grupo C", equipos: ["Brasil","Marruecos","Haití","Escocia"] },
  D: { nombre: "Grupo D", equipos: ["Estados Unidos","Paraguay","Australia","Turquía"] },
  E: { nombre: "Grupo E", equipos: ["Alemania","Curazao","Costa de Marfil","Ecuador"] },
  F: { nombre: "Grupo F", equipos: ["Países Bajos","Japón","Suecia","Túnez"] },
  G: { nombre: "Grupo G", equipos: ["Bélgica","Egipto","Irán","Nueva Zelanda"] },
  H: { nombre: "Grupo H", equipos: ["España","Cabo Verde","Arabia Saudita","Uruguay"] },
  I: { nombre: "Grupo I", equipos: ["Francia","Senegal","Irak","Noruega"] },
  J: { nombre: "Grupo J", equipos: ["Argentina","Argelia","Austria","Jordania"] },
  K: { nombre: "Grupo K", equipos: ["Portugal","RD Congo","Uzbekistán","Colombia"] },
  L: { nombre: "Grupo L", equipos: ["Inglaterra","Croacia","Ghana","Panamá"] }
};

// Códigos de bandera para flagcdn.com
const BANDERAS = {
  "México": "mx", "Sudáfrica": "za", "Corea del Sur": "kr", "República Checa": "cz",
  "Canadá": "ca", "Bosnia-Herzegovina": "ba", "Qatar": "qa", "Suiza": "ch",
  "Brasil": "br", "Marruecos": "ma", "Haití": "ht", "Escocia": "gb-sct",
  "Estados Unidos": "us", "Paraguay": "py", "Australia": "au", "Turquía": "tr",
  "Alemania": "de", "Curazao": "cw", "Costa de Marfil": "ci", "Ecuador": "ec",
  "Países Bajos": "nl", "Japón": "jp", "Suecia": "se", "Túnez": "tn",
  "Bélgica": "be", "Egipto": "eg", "Irán": "ir", "Nueva Zelanda": "nz",
  "España": "es", "Cabo Verde": "cv", "Arabia Saudita": "sa", "Uruguay": "uy",
  "Francia": "fr", "Senegal": "sn", "Irak": "iq", "Noruega": "no",
  "Argentina": "ar", "Argelia": "dz", "Austria": "at", "Jordania": "jo",
  "Portugal": "pt", "RD Congo": "cd", "Uzbekistán": "uz", "Colombia": "co",
  "Inglaterra": "gb-eng", "Croacia": "hr", "Ghana": "gh", "Panamá": "pa"
};

// Partidos fase de grupos (hora Ecuador UTC-5)
// id único, grupo, fecha, hora, local, visitante, jornada
const PARTIDOS_GRUPOS = [
  // JORNADA 1
  {id:"A1J1", grupo:"A", fecha:"2026-06-11", hora:"14:00", local:"México", visitante:"Sudáfrica", jornada:1},
  {id:"A2J1", grupo:"A", fecha:"2026-06-11", hora:"21:00", local:"Corea del Sur", visitante:"República Checa", jornada:1},
  {id:"B1J1", grupo:"B", fecha:"2026-06-12", hora:"14:00", local:"Canadá", visitante:"Bosnia-Herzegovina", jornada:1},
  {id:"D1J1", grupo:"D", fecha:"2026-06-12", hora:"20:00", local:"Estados Unidos", visitante:"Paraguay", jornada:1},
  {id:"B2J1", grupo:"B", fecha:"2026-06-13", hora:"14:00", local:"Qatar", visitante:"Suiza", jornada:1},
  {id:"C1J1", grupo:"C", fecha:"2026-06-13", hora:"17:00", local:"Brasil", visitante:"Marruecos", jornada:1},
  {id:"C2J1", grupo:"C", fecha:"2026-06-13", hora:"20:00", local:"Haití", visitante:"Escocia", jornada:1},
  {id:"D2J1", grupo:"D", fecha:"2026-06-14", hora:"14:00", local:"Australia", visitante:"Turquía", jornada:1},
  {id:"E1J1", grupo:"E", fecha:"2026-06-14", hora:"11:00", local:"Alemania", visitante:"Curazao", jornada:1},
  {id:"F1J1", grupo:"F", fecha:"2026-06-14", hora:"17:00", local:"Países Bajos", visitante:"Japón", jornada:1},
  {id:"E2J1", grupo:"E", fecha:"2026-06-15", hora:"11:00", local:"Costa de Marfil", visitante:"Ecuador", jornada:1},
  {id:"F2J1", grupo:"F", fecha:"2026-06-15", hora:"17:00", local:"Suecia", visitante:"Túnez", jornada:1},
  {id:"G1J1", grupo:"G", fecha:"2026-06-15", hora:"14:00", local:"Bélgica", visitante:"Egipto", jornada:1},
  {id:"H1J1", grupo:"H", fecha:"2026-06-15", hora:"20:00", local:"España", visitante:"Cabo Verde", jornada:1},
  {id:"G2J1", grupo:"G", fecha:"2026-06-16", hora:"11:00", local:"Irán", visitante:"Nueva Zelanda", jornada:1},
  {id:"H2J1", grupo:"H", fecha:"2026-06-16", hora:"17:00", local:"Arabia Saudita", visitante:"Uruguay", jornada:1},
  {id:"I1J1", grupo:"I", fecha:"2026-06-16", hora:"14:00", local:"Francia", visitante:"Senegal", jornada:1},
  {id:"J1J1", grupo:"J", fecha:"2026-06-16", hora:"20:00", local:"Argentina", visitante:"Argelia", jornada:1},
  {id:"I2J1", grupo:"I", fecha:"2026-06-17", hora:"11:00", local:"Irak", visitante:"Noruega", jornada:1},
  {id:"J2J1", grupo:"J", fecha:"2026-06-17", hora:"17:00", local:"Austria", visitante:"Jordania", jornada:1},
  {id:"K1J1", grupo:"K", fecha:"2026-06-17", hora:"14:00", local:"Portugal", visitante:"RD Congo", jornada:1},
  {id:"L1J1", grupo:"L", fecha:"2026-06-17", hora:"17:00", local:"Inglaterra", visitante:"Croacia", jornada:1},
  {id:"K2J1", grupo:"K", fecha:"2026-06-17", hora:"21:00", local:"Uzbekistán", visitante:"Colombia", jornada:1},
  {id:"L2J1", grupo:"L", fecha:"2026-06-17", hora:"20:00", local:"Ghana", visitante:"Panamá", jornada:1},

  // JORNADA 2
  {id:"A1J2", grupo:"A", fecha:"2026-06-18", hora:"11:00", local:"Sudáfrica", visitante:"República Checa", jornada:2},
  {id:"A2J2", grupo:"A", fecha:"2026-06-18", hora:"20:00", local:"México", visitante:"Corea del Sur", jornada:2},
  {id:"B1J2", grupo:"B", fecha:"2026-06-18", hora:"14:00", local:"Suiza", visitante:"Bosnia-Herzegovina", jornada:2},
  {id:"D1J2", grupo:"D", fecha:"2026-06-18", hora:"17:00", local:"Canadá", visitante:"Qatar", jornada:2},
  {id:"C1J2", grupo:"C", fecha:"2026-06-19", hora:"14:00", local:"Marruecos", visitante:"Escocia", jornada:2},
  {id:"C2J2", grupo:"C", fecha:"2026-06-19", hora:"17:00", local:"Brasil", visitante:"Haití", jornada:2},
  {id:"D2J2", grupo:"D", fecha:"2026-06-19", hora:"20:00", local:"Estados Unidos", visitante:"Australia", jornada:2},
  {id:"E1J2", grupo:"E", fecha:"2026-06-20", hora:"11:00", local:"Alemania", visitante:"Costa de Marfil", jornada:2},
  {id:"E2J2", grupo:"E", fecha:"2026-06-20", hora:"17:00", local:"Ecuador", visitante:"Curazao", jornada:2},
  {id:"F1J2", grupo:"F", fecha:"2026-06-20", hora:"14:00", local:"Japón", visitante:"Suecia", jornada:2},
  {id:"F2J2", grupo:"F", fecha:"2026-06-20", hora:"20:00", local:"Países Bajos", visitante:"Túnez", jornada:2},
  {id:"G1J2", grupo:"G", fecha:"2026-06-21", hora:"11:00", local:"Bélgica", visitante:"Irán", jornada:2},
  {id:"G2J2", grupo:"G", fecha:"2026-06-21", hora:"17:00", local:"Egipto", visitante:"Nueva Zelanda", jornada:2},
  {id:"H1J2", grupo:"H", fecha:"2026-06-21", hora:"14:00", local:"España", visitante:"Arabia Saudita", jornada:2},
  {id:"H2J2", grupo:"H", fecha:"2026-06-21", hora:"20:00", local:"Uruguay", visitante:"Cabo Verde", jornada:2},
  {id:"I1J2", grupo:"I", fecha:"2026-06-22", hora:"11:00", local:"Francia", visitante:"Irak", jornada:2},
  {id:"I2J2", grupo:"I", fecha:"2026-06-22", hora:"17:00", local:"Senegal", visitante:"Noruega", jornada:2},
  {id:"J1J2", grupo:"J", fecha:"2026-06-22", hora:"14:00", local:"Jordania", visitante:"Argelia", jornada:2},
  {id:"J2J2", grupo:"J", fecha:"2026-06-22", hora:"20:00", local:"Argentina", visitante:"Austria", jornada:2},
  {id:"K1J2", grupo:"K", fecha:"2026-06-23", hora:"14:00", local:"Portugal", visitante:"Uzbekistán", jornada:2},
  {id:"K2J2", grupo:"K", fecha:"2026-06-23", hora:"21:00", local:"RD Congo", visitante:"Colombia", jornada:2},
  {id:"L1J2", grupo:"L", fecha:"2026-06-23", hora:"17:00", local:"Inglaterra", visitante:"Ghana", jornada:2},
  {id:"L2J2", grupo:"L", fecha:"2026-06-23", hora:"20:00", local:"Panamá", visitante:"Croacia", jornada:2},
  {id:"B2J2", grupo:"B", fecha:"2026-06-19", hora:"11:00", local:"Paraguay", visitante:"Turquía", jornada:2},

  // JORNADA 3
  {id:"A1J3", grupo:"A", fecha:"2026-06-24", hora:"19:00", local:"República Checa", visitante:"México", jornada:3},
  {id:"A2J3", grupo:"A", fecha:"2026-06-24", hora:"19:00", local:"Sudáfrica", visitante:"Corea del Sur", jornada:3},
  {id:"B1J3", grupo:"B", fecha:"2026-06-25", hora:"19:00", local:"Bosnia-Herzegovina", visitante:"Qatar", jornada:3},
  {id:"B2J3", grupo:"B", fecha:"2026-06-25", hora:"19:00", local:"Suiza", visitante:"Canadá", jornada:3},
  {id:"C1J3", grupo:"C", fecha:"2026-06-25", hora:"15:00", local:"Escocia", visitante:"Brasil", jornada:3},
  {id:"C2J3", grupo:"C", fecha:"2026-06-25", hora:"15:00", local:"Marruecos", visitante:"Haití", jornada:3},
  {id:"D1J3", grupo:"D", fecha:"2026-06-26", hora:"19:00", local:"Paraguay", visitante:"Australia", jornada:3},
  {id:"D2J3", grupo:"D", fecha:"2026-06-26", hora:"19:00", local:"Turquía", visitante:"Estados Unidos", jornada:3},
  {id:"E1J3", grupo:"E", fecha:"2026-06-26", hora:"15:00", local:"Curazao", visitante:"Costa de Marfil", jornada:3},
  {id:"E2J3", grupo:"E", fecha:"2026-06-26", hora:"15:00", local:"Ecuador", visitante:"Alemania", jornada:3},
  {id:"F1J3", grupo:"F", fecha:"2026-06-27", hora:"19:00", local:"Túnez", visitante:"Japón", jornada:3},
  {id:"F2J3", grupo:"F", fecha:"2026-06-27", hora:"19:00", local:"Suecia", visitante:"Países Bajos", jornada:3},
  {id:"G1J3", grupo:"G", fecha:"2026-06-27", hora:"15:00", local:"Nueva Zelanda", visitante:"Bélgica", jornada:3},
  {id:"G2J3", grupo:"G", fecha:"2026-06-27", hora:"15:00", local:"Irán", visitante:"Egipto", jornada:3},
  {id:"H1J3", grupo:"H", fecha:"2026-06-27", hora:"19:00", local:"Cabo Verde", visitante:"Uruguay", jornada:3},
  {id:"H2J3", grupo:"H", fecha:"2026-06-27", hora:"19:00", local:"Arabia Saudita", visitante:"España", jornada:3},
  {id:"I1J3", grupo:"I", fecha:"2026-06-27", hora:"15:00", local:"Noruega", visitante:"Francia", jornada:3},
  {id:"I2J3", grupo:"I", fecha:"2026-06-27", hora:"15:00", local:"Irak", visitante:"Senegal", jornada:3},
  {id:"J1J3", grupo:"J", fecha:"2026-06-27", hora:"21:00", local:"Argelia", visitante:"Austria", jornada:3},
  {id:"J2J3", grupo:"J", fecha:"2026-06-27", hora:"21:00", local:"Jordania", visitante:"Argentina", jornada:3},
  {id:"K1J3", grupo:"K", fecha:"2026-06-27", hora:"19:30", local:"Colombia", visitante:"Portugal", jornada:3},
  {id:"K2J3", grupo:"K", fecha:"2026-06-27", hora:"19:30", local:"RD Congo", visitante:"Uzbekistán", jornada:3},
  {id:"L1J3", grupo:"L", fecha:"2026-06-27", hora:"17:00", local:"Panamá", visitante:"Inglaterra", jornada:3},
  {id:"L2J3", grupo:"L", fecha:"2026-06-27", hora:"17:00", local:"Croacia", visitante:"Ghana", jornada:3},
];

// Sistema de puntos
const PUNTOS = {
  // Fase de grupos - pronosticar posiciones finales
  GRUPO_CLASIFICADOS_ORDEN: 100,    // aciertas 1ro y 2do en orden exacto
  GRUPO_CLASIFICADOS_SIN_ORDEN: 50, // aciertas quiénes clasifican sin importar orden
  GRUPO_TERCER_LUGAR: 25,           // aciertas el mejor 3ro del grupo

  // Partidos del día
  MARCADOR_EXACTO: 200,             // marcador exacto (tiempo reglamentario)
  RESULTADO_CORRECTO: 100,          // gana/empata/pierde (sin marcador exacto)
  ECUADOR_MARCADOR_EXACTO: 400,     // marcador exacto y Ecuador gana
  ECUADOR_RESULTADO_CORRECTO: 200,  // resultado correcto de Ecuador

  // Mata-mata (16avos en adelante)
  CLASIFICADO_CORRECTO: 50,         // aciertas quién avanza
};