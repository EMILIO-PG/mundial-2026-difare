const CONTEXTO_PARTIDOS = [
  // ─── GRUPO A ─────────────────────────────────────────────────────────────
  {
    id: "A1J1",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (empate 1-1 en Sudáfrica 2010); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "México es la selección con más partidos inaugurales disputados en la historia y busca romper la racha de no superar octavos desde 1986.",
      visitante: "Sudáfrica regresa a una cita mundialista tras 16 años, recordando el icónico gol de Tshabalala que unió a un continente entero."
    },
    jugador_a_seguir: {
      local: { nombre: "Santiago Giménez", posicion: "Delantero centro", razon: "El goleador del Feyenoord llega en su madurez total para ser el referente de área que el Tri ha buscado por décadas." },
      visitante: { nombre: "Percy Tau", posicion: "Extremo", razon: "Su velocidad y experiencia en ligas europeas son la principal arma de contraataque para castigar a la defensa mexicana." }
    },
    hype: "El rugido del Azteca abre las puertas del mundo en una fiesta que paraliza al planeta.",
    ranking_local: 15, ranking_visitante: 62, favorito: "local"
  },
  {
    id: "A2J1",
    historia: "Un solo antecedente en Copa del Mundo (Checoslovaquia ganó 7-0 en 1954); primer enfrentamiento mundialista contra la actual República Checa.",
    datos: {
      local: "Corea del Sur ha clasificado a todos los Mundiales desde 1986, siendo la potencia más consistente de Asia en la gran cita.",
      visitante: "La República Checa vuelve al Mundial liderada por una generación física y disciplinada que emula los éxitos de la Eurocopa."
    },
    jugador_a_seguir: {
      local: { nombre: "Heung-min Son", posicion: "Extremo izquierdo", razon: "En su último Mundial, la leyenda del Tottenham busca guiar a los guerreros Taeguk con su pegada de media distancia." },
      visitante: { nombre: "Patrik Schick", posicion: "Delantero", razon: "Un finalizador implacable que castiga cualquier error aéreo; su duelo con los centrales coreanos será clave." }
    },
    hype: "La disciplina asiática choca contra la torre de control checa en un duelo táctico sin margen de error.",
    ranking_local: 22, ranking_visitante: 34, favorito: "equilibrado"
  },
  {
    id: "A1J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Sudáfrica ha demostrado históricamente ser un equipo muy difícil de batir para los europeos por su despliegue físico y velocidad.",
      visitante: "República Checa basa su juego en el orden táctico y la fortaleza en jugadas a balón parado, un área donde suelen sacar ventaja."
    },
    jugador_a_seguir: {
      local: { nombre: "Themba Zwane", posicion: "Mediocampista", razon: "Aporta la pausa y la visión necesaria para que los atacantes sudafricanos puedan explotar su velocidad." },
      visitante: { nombre: "Tomas Soucek", posicion: "Mediocentro", razon: "Su capacidad para llegar al área contraria como un segundo delantero lo hace indescifrable para las marcas." }
    },
    hype: "Choque de estilos: La velocidad africana contra el rigor táctico del corazón de Europa.",
    ranking_local: 62, ranking_visitante: 34, favorito: "visitante"
  },
  {
    id: "A2J2",
    historia: "Se han enfrentado 2 veces en Copa del Mundo (México ganó 3-1 en 1998 y 2-1 en 2018); sin historial en eliminatorias.",
    datos: {
      local: "México nunca ha perdido contra Corea del Sur en Mundiales, convirtiéndose en su particular bestia negra en fases de grupos.",
      visitante: "Corea del Sur llega con sed de revancha tras las derrotas en Francia 98 y Rusia 2018 que complicaron sus clasificaciones."
    },
    jugador_a_seguir: {
      local: { nombre: "Edson Álvarez", posicion: "Mediocentro", razon: "El 'Machín' será el encargado de frenar las transiciones rápidas coreanas y dar salida limpia al equipo mexicano." },
      visitante: { nombre: "Hee-chan Hwang", posicion: "Extremo derecho", razon: "Su potencia física en carrera es ideal para explotar los espacios que deja México cuando se vuelca al ataque." }
    },
    hype: "El Tri busca reafirmar su paternidad mundialista ante la velocidad electrizante de los guerreros coreanos.",
    ranking_local: 15, ranking_visitante: 22, favorito: "local"
  },
  {
    id: "A1J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Checoslovaquia ganó 3-1 en Chile 1962); primer cruce mundialista ante la nación checa independiente.",
    datos: {
      local: "República Checa históricamente ha sido superior físicamente a México, un factor que intentarán explotar para asegurar su clasificación.",
      visitante: "México se juega la vida en este cierre de grupo, apelando a la mística del Estadio Azteca que nunca ha visto caer al Tri en fase de grupos."
    },
    jugador_a_seguir: {
      local: { nombre: "Adam Hložek", posicion: "Delantero", razon: "Su versatilidad para jugar en cualquier posición del ataque será una pesadilla para la zaga mexicana." },
      visitante: { nombre: "Luis Chávez", posicion: "Mediocentro", razon: "Su excelente golpeo a balón parado puede ser la llave para abrir un partido que se prevé muy cerrado." }
    },
    hype: "Todo o nada: México se juega el destino ante el rigor checo en su templo sagrado.",
    ranking_local: 34, ranking_visitante: 15, favorito: "local"
  },
  {
    id: "A2J3",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Sudáfrica llega a este cierre con la esperanza de dar un golpe final, basando su fe en la velocidad de sus transiciones.",
      visitante: "Corea del Sur sabe que estos partidos contra africanos se definen por la resistencia; su preparación física es superior a la media."
    },
    jugador_a_seguir: {
      local: { nombre: "Lyle Foster", posicion: "Delantero", razon: "Su capacidad de finalización en el área es lo que necesita Sudáfrica para capitalizar sus llegadas." },
      visitante: { nombre: "Kang-in Lee", posicion: "Mediocentro ofensivo", razon: "Su talento para poner pases entre líneas es lo que puede desarmar la estructura defensiva africana." }
    },
    hype: "Choque de continentes: La esperanza de los Bafana contra la disciplina coreana.",
    ranking_local: 62, ranking_visitante: 22, favorito: "visitante"
  },

  // ─── GRUPO B ─────────────────────────────────────────────────────────────
  {
    id: "B1J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Canadá llega como co-anfitrión tras demostrar en Qatar que su crecimiento no es casualidad, basando su juego en una velocidad eléctrica.",
      visitante: "Bosnia-Herzegovina busca repetir su hazaña de 2014, apoyándose en un mediocampo de mucha clase y control de balón."
    },
    jugador_a_seguir: {
      local: { nombre: "Alphonso Davies", posicion: "Lateral/Extremo", razon: "El jugador más rápido del torneo; su capacidad para recorrer toda la banda obligará a los bosnios a retroceder." },
      visitante: { nombre: "Ermedin Demirović", posicion: "Delantero", razon: "Heredero de la garra bosnia, su juego de espaldas será vital para aguantar la presión alta de los canadienses." }
    },
    hype: "La hoja de maple quiere incendiar su propia fiesta ante la resistencia balcánica.",
    ranking_local: 38, ranking_visitante: 55, favorito: "local"
  },
  {
    id: "B2J1",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Qatar llega como vigente campeón de Asia, buscando limpiar la imagen dejada en su propio Mundial donde no sumó puntos.",
      visitante: "Suiza es el 'matagigantes' de Europa, habiendo superado la fase de grupos en sus últimas tres participaciones mundialistas."
    },
    jugador_a_seguir: {
      local: { nombre: "Akram Afif", posicion: "Extremo izquierdo", razon: "El mejor jugador de Asia actualmente; su creatividad es el único camino para descifrar la ordenada defensa suiza." },
      visitante: { nombre: "Granit Xhaka", posicion: "Mediocentro", razon: "El termómetro del equipo suizo; si él domina el círculo central, Qatar sufrirá para recuperar la posesión." }
    },
    hype: "El oro del desierto contra la precisión del reloj suizo.",
    ranking_local: 48, ranking_visitante: 33, favorito: "visitante"
  },
  {
    id: "B1J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Suiza es experta en manejar los tiempos de los partidos y suele castigar los errores de concentración de equipos menos experimentados.",
      visitante: "Bosnia-Herzegovina posee una de las mejores duplas de ataque de su historia, capaz de anotar ante cualquier descuido defensivo."
    },
    jugador_a_seguir: {
      local: { nombre: "Manuel Akanji", posicion: "Defensa central", razon: "Su jerarquía para liderar la zaga será clave para anular a los corpulentos delanteros bosnios." },
      visitante: { nombre: "Amar Dedić", posicion: "Lateral derecho", razon: "Uno de los mejores laterales jóvenes de Europa, su proyección ofensiva es constante y peligrosa." }
    },
    hype: "Duelo de resistencia: La solidez alpina contra la técnica y el orgullo balcánico.",
    ranking_local: 33, ranking_visitante: 55, favorito: "local"
  },
  {
    id: "D1J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Canadá buscará hacer valer su localía ante una selección catarí que sufre mucho cuando el ritmo de juego es de alta intensidad.",
      visitante: "Qatar basa su juego en el conocimiento mutuo de su plantel, que lleva años jugando juntos bajo una misma idea táctica."
    },
    jugador_a_seguir: {
      local: { nombre: "Jonathan David", posicion: "Delantero", razon: "Su movilidad constante fuera del área descolocará a la rígida línea defensiva de Qatar." },
      visitante: { nombre: "Almoez Ali", posicion: "Delantero", razon: "Un goleador de raza que no necesita muchas ocasiones para marcar; Canadá no puede permitirse descuidos con él." }
    },
    hype: "Velocidad boreal contra la estrategia colectiva del Golfo.",
    ranking_local: 38, ranking_visitante: 48, favorito: "local"
  },
  {
    id: "B2J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Paraguay históricamente se siente cómodo ante rivales que proponen un juego técnico, destruyendo sus circuitos con una marca asfixiante.",
      visitante: "Turquía suele ser un equipo muy emocional; si logran marcar temprano, se vuelven imparables gracias a su talento ofensivo."
    },
    jugador_a_seguir: {
      local: { nombre: "Julio Enciso", posicion: "Delantero", razon: "La 'Joya' tiene el desparpajo y el disparo de larga distancia que puede sorprender a una defensa turca a veces distraída." },
      visitante: { nombre: "Hakan Çalhanoğlu", posicion: "Mediocentro", razon: "El gran maestro del balón parado; cada falta cerca del área paraguaya es medio gol en sus botas." }
    },
    hype: "Garra guaraní contra el talento volcánico de Turquía.",
    ranking_local: 35, ranking_visitante: 30, favorito: "equilibrado"
  },
  {
    id: "B1J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Bosnia-Herzegovina buscará imponer su jerarquía ante una Qatar que suele sufrir en los cierres de grupo bajo presión.",
      visitante: "Qatar ha trabajado intensamente en la resistencia mental para este tipo de escenarios donde se juegan la clasificación."
    },
    jugador_a_seguir: {
      local: { nombre: "Miralem Pjanic", posicion: "Mediocentro", razon: "Su experiencia en grandes citas será el faro que guíe a Bosnia en el partido decisivo." },
      visitante: { nombre: "Hassan Al-Haydos", posicion: "Mediocampista", razon: "El eterno capitán catarí es quien debe poner la calma cuando el equipo se vea presionado." }
    },
    hype: "El orgullo bosnio contra la ambición del campeón de Asia.",
    ranking_local: 55, ranking_visitante: 48, favorito: "equilibrado"
  },
  {
    id: "B2J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Suiza es una de las selecciones más consistentes del mundo para cerrar clasificaciones, no pierden un último partido de grupos desde 2010.",
      visitante: "Canadá buscará hacer historia clasificando por primera vez a la siguiente ronda ante uno de los rivales más sólidos de Europa."
    },
    jugador_a_seguir: {
      local: { nombre: "Breel Embolo", posicion: "Delantero", razon: "Su potencia física es ideal para chocar contra los centrales canadienses y generar espacios." },
      visitante: { nombre: "Tajon Buchanan", posicion: "Extremo", razon: "Su descaro y habilidad en el regate son fundamentales para desbordar a la organizada defensa suiza." }
    },
    hype: "La solidez del reloj suizo contra el vendaval de la hoja de maple.",
    ranking_local: 33, ranking_visitante: 38, favorito: "local"
  },

  // ─── GRUPO C ─────────────────────────────────────────────────────────────
  {
    id: "C1J1",
    historia: "Un solo enfrentamiento en Copa del Mundo (Brasil ganó 3-0 en Francia 1998); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Brasil es la única selección que ha participado en todos los Mundiales y busca su sexta estrella tras una sequía de 24 años.",
      visitante: "Marruecos hizo historia en Qatar como el primer africano en semifinales; su bloque defensivo es hoy uno de los mejores del mundo."
    },
    jugador_a_seguir: {
      local: { nombre: "Vinícius Júnior", posicion: "Extremo izquierdo", razon: "El máximo candidato al Balón de Oro deberá usar su regate ante Achraf Hakimi en el duelo individual más esperado del grupo." },
      visitante: { nombre: "Achraf Hakimi", posicion: "Lateral derecho", razon: "Su capacidad para proyectarse al ataque sin descuidar a Vinícius será la clave táctica del encuentro." }
    },
    hype: "El Jogo Bonito se enfrenta al orgullo del Atlas en un choque de titanes.",
    ranking_local: 5, ranking_visitante: 13, favorito: "local"
  },
  {
    id: "C2J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Haití regresa a la Copa del Mundo tras su única participación en 1974, clasificando con un fútbol alegre y de mucha potencia física.",
      visitante: "Escocia vuelve al escenario mundialista con una plantilla que brilla en la Premier League y una afición que se siente local en cualquier lugar."
    },
    jugador_a_seguir: {
      local: { nombre: "Duckens Nazon", posicion: "Delantero", razon: "El goleador histórico necesita una noche inspirada para aprovechar las pocas opciones que deje la cerrada defensa escocesa." },
      visitante: { nombre: "Scott McTominay", posicion: "Mediocentro", razon: "Su llegada al área desde segunda línea ha sido la llave de gol de Escocia durante toda la eliminatoria europea." }
    },
    hype: "La pasión caribeña desafía el espíritu inquebrantable de los Highlands.",
    ranking_local: 85, ranking_visitante: 45, favorito: "visitante"
  },
  {
    id: "C1J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Marruecos ha demostrado que puede neutralizar a selecciones que basan su juego en el ataque directo gracias a su gran disciplina táctica.",
      visitante: "Escocia sufre históricamente ante equipos africanos que combinan técnica individual con gran despliegue físico."
    },
    jugador_a_seguir: {
      local: { nombre: "Brahim Díaz", posicion: "Mediapunta", razon: "Su capacidad de inventar jugadas en tres cuartos de campo será vital contra la doble línea de cuatro escocesa." },
      visitante: { nombre: "John McGinn", posicion: "Mediocampista", razon: "Su fuerza para proteger el balón y ganar duelos individuales es el motor que empuja a Escocia hacia adelante." }
    },
    hype: "La técnica depurada del Magreb contra la combatividad legendaria de Escocia.",
    ranking_local: 13, ranking_visitante: 45, favorito: "local"
  },
  {
    id: "C2J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Brasil suele tener problemas contra equipos caribeños de gran envergadura física en los primeros minutos de juego.",
      visitante: "Haití llega con la ilusión de enfrentar a la pentacampeona, un partido que para ellos es el más importante de su historia."
    },
    jugador_a_seguir: {
      local: { nombre: "Rodrygo Goes", posicion: "Delantero", razon: "Su inteligencia para ocupar espacios vacíos será fundamental si Haití decide replegarse con muchos jugadores." },
      visitante: { nombre: "Frantzdy Pierrot", posicion: "Delantero", razon: "Es la referencia física absoluta; su objetivo será ganar duelos aéreos y permitir la subida de sus volantes." }
    },
    hype: "David contra Goliat: El sueño caribeño se enfrenta a la magia eterna de la Canarinha.",
    ranking_local: 5, ranking_visitante: 85, favorito: "local"
  },
  {
    id: "C1J3",
    historia: "Se han enfrentado 4 veces en Copa del Mundo (Brasil ganó 3 y empataron 1 en 1974); Brasil ha marcado 7 goles y Escocia solo 2.",
    datos: {
      local: "Escocia nunca ha podido vencer a Brasil en Mundiales, siendo este cruce un clásico de las fases de grupos de los años 80 y 90.",
      visitante: "Brasil llega a este cierre buscando asegurar el primer puesto y evitar cruces complicados, con un plantel que rebosa confianza."
    },
    jugador_a_seguir: {
      local: { nombre: "Andrew Robertson", posicion: "Lateral izquierdo", razon: "Su liderazgo y capacidad de marcaje serán puestos a prueba máxima por los extremos brasileños." },
      visitante: { nombre: "Lucas Paquetá", posicion: "Mediocampista", razon: "Su capacidad para combinar técnica con trabajo físico es vital contra un equipo tan aguerrido como el escocés." }
    },
    hype: "La historia se repite: Escocia busca el milagro ante el gigante de Sudamérica.",
    ranking_local: 45, ranking_visitante: 5, favorito: "visitante"
  },
  {
    id: "C2J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Marruecos buscará confirmar su favoritismo basándose en su solidez colectiva que rara vez permite goles en contra.",
      visitante: "Haití llega a este partido final con el objetivo de demostrar que el fútbol caribeño puede competir al más alto nivel táctico."
    },
    jugador_a_seguir: {
      local: { nombre: "Yassine Bounou", posicion: "Portero", razon: "Su seguridad bajo palos es el cimiento sobre el cual se construye toda la confianza marroquí." },
      visitante: { nombre: "Derrick Etienne Jr.", posicion: "Extremo", razon: "Su velocidad es la única arma que podría encontrar desprevenida a la excelente zaga africana." }
    },
    hype: "El muro del Atlas contra la velocidad indomable de Haití.",
    ranking_local: 13, ranking_visitante: 85, favorito: "local"
  },

  // ─── GRUPO D ─────────────────────────────────────────────────────────────
  {
    id: "D1J1",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Estados Unidos ganó 3-0 en Uruguay 1930) y 1 vez en Eliminatorias (playoff 1934 con triunfo norteamericano).",
    datos: {
      local: "EE.UU. presenta su generación más talentosa de la historia, con casi todo su plantel titular jugando en las cinco grandes ligas europeas.",
      visitante: "Paraguay es sinónimo de garra y solidez defensiva, buscando recuperar el protagonismo mundialista que perdió tras Sudáfrica 2010."
    },
    jugador_a_seguir: {
      local: { nombre: "Christian Pulisic", posicion: "Extremo", razon: "El 'Capitán América' es el alma del equipo; su desequilibrio individual será necesario para romper el muro paraguayo." },
      visitante: { nombre: "Miguel Almirón", posicion: "Mediapunta", razon: "Conoce a la perfección el fútbol norteamericano y su velocidad en transición es la mayor amenaza para la zaga local." }
    },
    hype: "El sueño americano se mide contra la muralla de la Albirroja en un duelo de alta tensión.",
    ranking_local: 16, ranking_visitante: 35, favorito: "local"
  },
  {
    id: "D2J1",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Australia ha superado la fase de grupos en dos ocasiones y se destaca por un juego aéreo dominante y una resistencia física inagotable.",
      visitante: "Turquía regresa al Mundial por primera vez desde su histórico tercer puesto en 2002, trayendo una camada de jóvenes talentos técnicos."
    },
    jugador_a_seguir: {
      local: { nombre: "Harry Souttar", posicion: "Defensa central", razon: "Con sus 2 metros de altura, es el arma principal en tiros de esquina y el líder de la resistencia oceánica." },
      visitante: { nombre: "Arda Güler", posicion: "Mediapunta", razon: "La joya del Real Madrid tiene la visión necesaria para filtrar pases entre las líneas del compacto equipo australiano." }
    },
    hype: "La fuerza de los Socceroos contra el talento emergente de los Otomanos.",
    ranking_local: 26, ranking_visitante: 30, favorito: "equilibrado"
  },
  {
    id: "D2J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Estados Unidos buscará asegurar su clasificación ante una Australia que siempre compite al máximo nivel físico contra equipos de CONCACAF.",
      visitante: "Australia basa su éxito en la solidez defensiva y en aprovechar al máximo las jugadas de estrategia a balón parado."
    },
    jugador_a_seguir: {
      local: { nombre: "Gio Reyna", posicion: "Mediocampista ofensivo", razon: "Su talento para el último pase es lo que necesita EEUU para derribar la muralla física australiana." },
      visitante: { nombre: "Jackson Irvine", posicion: "Mediocentro", razon: "El líder espiritual del equipo; su trabajo sucio en el medio será clave para anular la fluidez norteamericana." }
    },
    hype: "Duelo de potencias deportivas: El dinamismo de las barras y estrellas contra la resistencia de los Socceroos.",
    ranking_local: 16, ranking_visitante: 26, favorito: "local"
  },
  {
    id: "D1J3",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Paraguay sabe que estos partidos de vida o muerte se juegan con el cuchillo entre los dientes, su especialidad histórica.",
      visitante: "Australia confía en que su preparación física les dé la ventaja en los últimos 20 minutos de un partido que será agotador."
    },
    jugador_a_seguir: {
      local: { nombre: "Gustavo Gómez", posicion: "Defensa central", razon: "Su jerarquía en ambas áreas será fundamental para ganar el duelo aéreo contra los australianos." },
      visitante: { nombre: "Riley McGree", posicion: "Mediocampista", razon: "Su dinamismo en el medio campo es lo que permite que Australia conecte con sus delanteros." }
    },
    hype: "Resistencia oceánica contra el corazón de Sudamérica por un boleto a la gloria.",
    ranking_local: 35, ranking_visitante: 26, favorito: "equilibrado"
  },
  {
    id: "D2J3",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Turquía suele dar su mejor versión cuando se siente desafiada por las potencias, y EEUU es el examen final del grupo.",
      visitante: "Estados Unidos buscará cerrar la fase de grupos con autoridad, sabiendo que su velocidad puede destrozar la defensa turca."
    },
    jugador_a_seguir: {
      local: { nombre: "Ferdi Kadıoğlu", posicion: "Lateral/Mediocampista", razon: "Su polivalencia y buen trato de balón son claves para que Turquía mantenga la posesión ante la presión yanqui." },
      visitante: { nombre: "Tyler Adams", posicion: "Mediocentro", razon: "El ancla del equipo; su capacidad para recuperar balones evitará que los talentosos turcos se asienten." }
    },
    hype: "Talento otomano contra la energía inagotable de las barras y estrellas.",
    ranking_local: 30, ranking_visitante: 16, favorito: "visitante"
  },

  // ─── GRUPO E ─────────────────────────────────────────────────────────────
  {
    id: "E1J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Alemania busca redimirse tras dos eliminaciones consecutivas en grupos, un fracaso sin precedentes para la tetracampeona mundial.",
      visitante: "Curazao debuta en una Copa del Mundo, siendo la gran sorpresa del Caribe y el equipo con menor población del torneo."
    },
    jugador_a_seguir: {
      local: { nombre: "Jamal Musiala", posicion: "Mediapunta", razon: "Su capacidad para conducir el balón en espacios reducidos será la llave para abrir el cerrojo defensivo caribeño." },
      visitante: { nombre: "Juninho Bacuna", posicion: "Mediocentro", razon: "El motor del equipo; de su capacidad para dar respiro con la posesión dependerá que Curazao no se vea asfixiado." }
    },
    hype: "La maquinaria alemana frente a la cenicienta que sueña con lo imposible.",
    ranking_local: 11, ranking_visitante: 80, favorito: "local"
  },
  {
    id: "E2J1",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Costa de Marfil regresa con una generación física y técnica que domina el fútbol africano, tras ganar la última CAN.",
      visitante: "Ecuador atraviesa su mejor momento histórico, con una base de jugadores jóvenes que son figuras en las ligas más competitivas del mundo."
    },
    jugador_a_seguir: {
      local: { nombre: "Sébastien Haller", posicion: "Delantero centro", razon: "Su imponente físico será la prueba de fuego para los jóvenes centrales ecuatorianos en el juego aéreo." },
      visitante: { nombre: "Moisés Caicedo", posicion: "Mediocentro", razon: "El cerebro y pulmón de la Tri; su duelo en el mediocampo contra Kessié definirá el control del partido." }
    },
    hype: "Potencia africana contra el ímpetu de la nueva generación sudamericana.",
    ranking_local: 28, ranking_visitante: 23, favorito: "equilibrado"
  },
  {
    id: "E1J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Alemania históricamente domina a las selecciones africanas en fase de grupos, aunque ha sufrido sorpresas en las últimas ediciones.",
      visitante: "Costa de Marfil es uno de los pocos equipos africanos que puede igualar la potencia física alemana en todos los sectores del campo."
    },
    jugador_a_seguir: {
      local: { nombre: "Florian Wirtz", posicion: "Mediapunta", razon: "Su visión de juego superior será la herramienta para desactivar la presión alta de los marfileños." },
      visitante: { nombre: "Franck Kessié", posicion: "Mediocentro", razon: "El 'Presidente' deberá dominar el mediocampo físicamente para evitar que Alemania controle el ritmo del juego." }
    },
    hype: "Choque de fuerzas: El rigor táctico europeo frente al poderío físico de los Elefantes.",
    ranking_local: 11, ranking_visitante: 28, favorito: "local"
  },
  {
    id: "E2J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Ecuador nunca ha perdido contra un equipo de la zona del Caribe en competiciones oficiales, manteniendo un récord de mucha efectividad.",
      visitante: "Curazao buscará dar la sorpresa basándose en la velocidad de sus extremos y la falta de presión por no ser los favoritos."
    },
    jugador_a_seguir: {
      local: { nombre: "Enner Valencia", posicion: "Delantero", razon: "El máximo goleador histórico de la Tri en Mundiales busca seguir aumentando su leyenda ante el debutante." },
      visitante: { nombre: "Leandro Bacuna", posicion: "Mediocentro", razon: "Su experiencia liderando al equipo en momentos críticos será fundamental para mantener el orden." }
    },
    hype: "La Tri quiere imponer su jerarquía ante la rebeldía del Caribe.",
    ranking_local: 23, ranking_visitante: 80, favorito: "local"
  },
  {
    id: "E1J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Curazao buscará cerrar su participación histórica de manera digna ante una de las mejores selecciones africanas.",
      visitante: "Costa de Marfil sabe que no puede confiarse, ya que un descuido ante un debutante podría costarles la clasificación."
    },
    jugador_a_seguir: {
      local: { nombre: "Eloy Room", posicion: "Portero", razon: "Su actuación será fundamental para detener la potencia de disparo de los atacantes marfileños." },
      visitante: { nombre: "Simon Adingra", posicion: "Extremo", razon: "Su juventud y desborde son la herramienta ideal para cansar a una defensa que sufrirá el desgaste del torneo." }
    },
    hype: "Los Elefantes buscan sellar su pase ante la ilusión caribeña.",
    ranking_local: 80, ranking_visitante: 28, favorito: "visitante"
  },
  {
    id: "E2J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Alemania ganó 3-0 en 2006); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Ecuador tiene la oportunidad de vengarse de la derrota en el Mundial de Alemania 2006, esta vez con una plantilla mucho más joven y dinámica.",
      visitante: "Alemania llega con la obligación absoluta de ganar para evitar un nuevo fracaso histórico en fase de grupos."
    },
    jugador_a_seguir: {
      local: { nombre: "Piero Hincapié", posicion: "Defensa central", razon: "Su capacidad para anticipar y su velocidad en los cruces serán vitales contra la élite ofensiva alemana." },
      visitante: { nombre: "İlkay Gündoğan", posicion: "Mediocentro", razon: "Su inteligencia para posicionarse y dictar el ritmo será lo que intente desordenar el bloque ecuatoriano." }
    },
    hype: "La Tri desafía a la historia: ¿Podrá Ecuador derribar a la potencia alemana?",
    ranking_local: 23, ranking_visitante: 11, favorito: "visitante"
  },

  // ─── GRUPO F ─────────────────────────────────────────────────────────────
  {
    id: "F1J1",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Países Bajos ganó 1-0 en Sudáfrica 2010); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Países Bajos es la selección con más finales disputadas (3) sin haber ganado nunca el título, una espina que buscan sacarse en 2026.",
      visitante: "Japón llega tras vencer a Alemania y España en 2022, consolidado como un equipo que domina las transiciones rápidas como nadie."
    },
    jugador_a_seguir: {
      local: { nombre: "Cody Gakpo", posicion: "Delantero", razon: "Su versatilidad para caer a banda y su potencia en el área lo hacen el peligro número uno para la defensa nipona." },
      visitante: { nombre: "Takefusa Kubo", posicion: "Extremo", razon: "Su talento técnico será vital para retener el balón ante la presión naranja y generar juego ofensivo." }
    },
    hype: "Fútbol total contra la velocidad del sol naciente.",
    ranking_local: 7, ranking_visitante: 18, favorito: "local"
  },
  {
    id: "F2J1",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Suecia vuelve tras ausentarse en 2022, basando su éxito en un orden táctico estricto y un ataque renovado con jóvenes estrellas.",
      visitante: "Túnez busca por fin superar una fase de grupos en su séptima participación, siendo un equipo experto en desesperar al rival."
    },
    jugador_a_seguir: {
      local: { nombre: "Alexander Isak", posicion: "Delantero", razon: "Su agilidad y definición son la principal esperanza sueca para romper defensas cerradas como la tunecina." },
      visitante: { nombre: "Aissa Laïdouni", posicion: "Mediocentro", razon: "El guerrero del mediocampo; su intensidad será clave para cortar los circuitos de juego europeos." }
    },
    hype: "El orden nórdico se pone a prueba ante la resistencia de las Águilas de Cartago.",
    ranking_local: 24, ranking_visitante: 42, favorito: "local"
  },
  {
    id: "F1J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Japón tiene un estilo de juego que suele complicar a los equipos nórdicos debido a su baja estatura pero alta agilidad y velocidad.",
      visitante: "Suecia confía en su superioridad en el juego aéreo para hacer daño a un equipo japonés que sufre con los centros al área."
    },
    jugador_a_seguir: {
      local: { nombre: "Kaoru Mitoma", posicion: "Extremo izquierdo", razon: "Su regate indescifrable es la mejor arma para romper la línea defensiva sueca que suele ser muy estática." },
      visitante: { nombre: "Viktor Gyökeres", posicion: "Delantero centro", razon: "Su potencia física y racha goleadora lo convierten en un peligro constante para la zaga nipona." }
    },
    hype: "Agilidad oriental contra la fuerza de los vikingos en un duelo por el liderato.",
    ranking_local: 18, ranking_visitante: 24, favorito: "equilibrado"
  },
  {
    id: "F2J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Países Bajos suele ser implacable contra equipos africanos en fases de grupos, basando su dominio en la posesión prolongada.",
      visitante: "Túnez presentará un bloque bajo muy difícil de penetrar, esperando una sola oportunidad en pelota parada para marcar."
    },
    jugador_a_seguir: {
      local: { nombre: "Virgil van Dijk", posicion: "Defensa central", razon: "Su presencia anula cualquier intento de juego directo de Túnez y da seguridad a la adelantada defensa naranja." },
      visitante: { nombre: "Ellyes Skhiri", posicion: "Mediocentro", razon: "Es el jugador que más kilómetros recorre; su despliegue será vital para tapar huecos ante el juego asociativo neerlandés." }
    },
    hype: "La naranja mecánica busca derribar el muro de las Águilas de Cartago.",
    ranking_local: 7, ranking_visitante: 42, favorito: "local"
  },
  {
    id: "F1J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Japón ganó 2-0 en 2002); sin historial en eliminatorias.",
    datos: {
      local: "Túnez buscará la revancha de aquel partido en Corea-Japón, confiando en su capacidad para frustrar el juego rápido nipón.",
      visitante: "Japón basa su confianza en su orden táctico y en la capacidad de sus suplentes para cambiar el partido en la segunda mitad."
    },
    jugador_a_seguir: {
      local: { nombre: "Youssef Msakni", posicion: "Extremo", razon: "El veterano genio tunecino buscará despedirse del Mundial dejando una última muestra de su inmensa calidad." },
      visitante: { nombre: "Ritsu Doan", posicion: "Extremo", razon: "Especialista en marcar goles saliendo desde el banquillo o en momentos críticos de los partidos." }
    },
    hype: "Estrategia contra velocidad por un lugar entre los mejores del mundo.",
    ranking_local: 42, ranking_visitante: 18, favorito: "visitante"
  },
  {
    id: "F2J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (empate 0-0 en 1974) y en Eliminatorias Euro con triunfos recientes de ambos.",
    datos: {
      local: "Suecia y Países Bajos se conocen a la perfección, lo que suele resultar en partidos muy tácticos y de pocos espacios.",
      visitante: "Países Bajos buscará imponer su mayor profundidad de plantilla para desgastar a los suecos en el tramo final del encuentro."
    },
    jugador_a_seguir: {
      local: { nombre: "Dejan Kulusevski", posicion: "Extremo", razon: "Su potencia física y habilidad para conducir el balón pueden romper la presión alta neerlandesa." },
      visitante: { nombre: "Frenkie de Jong", posicion: "Mediocentro", razon: "El arquitecto que debe manejar los hilos para que Países Bajos no caiga en la trampa defensiva sueca." }
    },
    hype: "Clásico europeo: El ajedrez nórdico contra el fútbol total de la naranja.",
    ranking_local: 24, ranking_visitante: 7, favorito: "visitante"
  },

  // ─── GRUPO G ─────────────────────────────────────────────────────────────
  {
    id: "G1J1",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Bélgica inicia su era post-generación dorada, manteniendo a sus referentes y sumando una explosiva camada de extremos jóvenes.",
      visitante: "Egipto llega con la presión de un país futbolizado al extremo, buscando demostrar que son más que un solo jugador estrella."
    },
    jugador_a_seguir: {
      local: { nombre: "Kevin De Bruyne", posicion: "Mediocentro ofensivo", razon: "El mejor pasador del mundo; un solo pase suyo puede dejar obsoleta toda la planificación defensiva egipcia." },
      visitante: { nombre: "Mohamed Salah", posicion: "Extremo derecho", razon: "En su posible despedida mundialista, el faraón cargará con toda la responsabilidad ofensiva de su nación." }
    },
    hype: "El genio belga se cruza en el camino del último gran sueño del Faraón.",
    ranking_local: 6, ranking_visitante: 25, favorito: "local"
  },
  {
    id: "G2J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Irán busca superar por primera vez la fase de grupos, apoyado en su fortaleza defensiva y una delantera que juega en la élite europea.",
      visitante: "Nueva Zelanda regresa tras 16 años, recordando que fueron la única selección invicta en Sudáfrica 2010 pese a quedar fuera en grupos."
    },
    jugador_a_seguir: {
      local: { nombre: "Mehdi Taremi", posicion: "Delantero", razon: "Su capacidad para fabricar goles de la nada es la mayor garantía para un equipo iraní que prioriza el orden." },
      visitante: { nombre: "Chris Wood", posicion: "Delantero centro", razon: "Toda la estrategia oceánica pasa por enviarle centros al área, donde su físico es casi imbatible." }
    },
    hype: "Duelo de estilos opuestos por la supremacía de los continentes emergentes.",
    ranking_local: 20, ranking_visitante: 90, favorito: "local"
  },
  {
    id: "G1J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Bélgica buscará imponer su ritmo ante un equipo iraní que históricamente sufre contra selecciones europeas de gran técnica individual.",
      visitante: "Irán es una de las selecciones con mejor promedio de balones recuperados en campo propio, lo que obligará a Bélgica a ser paciente."
    },
    jugador_a_seguir: {
      local: { nombre: "Jérémy Doku", posicion: "Extremo", razon: "Su explosividad en el uno contra uno es ideal para romper los dobles marcajes que planteará Irán." },
      visitante: { nombre: "Sardar Azmoun", posicion: "Delantero", razon: "Un especialista en el juego aéreo que puede aprovechar cualquier centro aislado para castigar a los belgas." }
    },
    hype: "Talento puro contra resistencia extrema en el tablero mundial.",
    ranking_local: 6, ranking_visitante: 20, favorito: "local"
  },
  {
    id: "G2J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Egipto basa sus posibilidades en el contraataque, un estilo que puede verse favorecido ante una Nueva Zelanda que suele dejar espacios atrás.",
      visitante: "Nueva Zelanda apuesta por un fútbol directo y físico, buscando ganar las segundas pelotas para sorprender a la defensa egipcia."
    },
    jugador_a_seguir: {
      local: { nombre: "Mostafa Mohamed", posicion: "Delantero", razon: "Su potencia para aguantar de espaldas permitirá que Salah llegue de frente al arco con más ventaja." },
      visitante: { nombre: "Liberto Cacace", posicion: "Lateral izquierdo", razon: "Su proyección por banda será fundamental para generar centros precisos hacia Chris Wood." }
    },
    hype: "Los Faraones quieren reinar ante el ímpetu de los All Whites.",
    ranking_local: 25, ranking_visitante: 90, favorito: "local"
  },
  {
    id: "G1J3",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Nueva Zelanda intentará cerrar su participación dando una sorpresa histórica ante uno de los mejores equipos del ranking FIFA.",
      visitante: "Bélgica buscará una victoria contundente que les permita entrar a la fase de eliminación directa con la moral al máximo."
    },
    jugador_a_seguir: {
      local: { nombre: "Matthew Garbett", posicion: "Mediocampista", razon: "Su energía en el mediocampo será necesaria para tratar de molestar la construcción de juego belga." },
      visitante: { nombre: "Lois Openda", posicion: "Delantero", razon: "Su velocidad extrema castigará a una defensa neozelandesa que suele sufrir en campo abierto." }
    },
    hype: "El gigante belga frente a la resistencia inquebrantable de los All Whites.",
    ranking_local: 90, ranking_visitante: 6, favorito: "visitante"
  },
  {
    id: "G2J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Irán ha demostrado ser un equipo muy difícil de batir para las selecciones africanas gracias a su disciplina táctica férrea.",
      visitante: "Egipto sabe que su única opción es la victoria y apostará por volcarse al ataque desde el primer minuto."
    },
    jugador_a_seguir: {
      local: { nombre: "Alireza Beiranvand", posicion: "Portero", razon: "Famoso por sus saques largos y su capacidad de parar penaltis; será el último muro para Salah." },
      visitante: { nombre: "Trézéguet", posicion: "Extremo", razon: "Su capacidad de desborde será necesaria para abrir una defensa iraní que suele estar muy cerrada." }
    },
    hype: "Duelo de estrategia: El cerrojo persa contra el ataque de los faraones.",
    ranking_local: 20, ranking_visitante: 25, favorito: "equilibrado"
  },

  // ─── GRUPO H ─────────────────────────────────────────────────────────────
  {
    id: "H1J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "España llega como vigente campeona de la Nations League y con un estilo renovado, más vertical y menos dependiente de la posesión estéril.",
      visitante: "Cabo Verde es el equipo de menor territorio en el Mundial, habiendo superado a potencias africanas para lograr su primera clasificación."
    },
    jugador_a_seguir: {
      local: { nombre: "Lamine Yamal", posicion: "Extremo", razon: "La joven perla busca deslumbrar al mundo con su regate y madurez impropia de su corta edad." },
      visitante: { nombre: "Ryan Mendes", posicion: "Extremo", razon: "El capitán y máximo referente; su experiencia será vital para guiar a los Tiburones Azules en su debut absoluto." }
    },
    hype: "La furia de una nueva era contra la ilusión del debutante más pequeño.",
    ranking_local: 3, ranking_visitante: 68, favorito: "local"
  },
  {
    id: "H2J1",
    historia: "Un solo enfrentamiento en Copa del Mundo (Uruguay ganó 1-0 en Rusia 2018); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Arabia Saudita sorprendió al mundo venciendo a Argentina en 2022 y llega con una liga local potenciada por estrellas mundiales.",
      visitante: "Uruguay, bajo el mando de Bielsa, ha transformado su juego histórico de garra en una presión sofocante y un ataque vertiginoso."
    },
    jugador_a_seguir: {
      local: { nombre: "Salem Al-Dawsari", posicion: "Extremo", razon: "El héroe nacional que ya sabe lo que es marcarle a gigantes; su talento individual es el alma de los Halcones Verdes." },
      visitante: { nombre: "Darwin Núñez", posicion: "Delantero", razon: "Su potencia física y desmarques al espacio son ideales para el estilo vertical que propone la nueva Celeste." }
    },
    hype: "La garra charrúa se reinventa ante el crecimiento imparable del fútbol árabe.",
    ranking_local: 56, ranking_visitante: 14, favorito: "visitante"
  },
  {
    id: "H1J2",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (España ganó 1-0 en Alemania 2006); sin historial en eliminatorias.",
    datos: {
      local: "España suele tener partidos de mucha posesión contra equipos árabes, aunque a veces le cuesta transformar ese dominio en goles.",
      visitante: "Arabia Saudita llega con la confianza de haber competido de igual a igual contra grandes potencias en los últimos años."
    },
    jugador_a_seguir: {
      local: { nombre: "Pedri", posicion: "Mediocampista", razon: "Su capacidad para filtrar pases entre líneas es la mejor solución para una defensa que se encierra cerca de su portero." },
      visitante: { nombre: "Firas Al-Buraikan", posicion: "Delantero", razon: "Su movilidad en el frente de ataque buscará pillar desprevenidos a los centrales españoles en alguna transición rápida." }
    },
    hype: "El ajedrez de La Roja contra la ambición renovada de los Halcones Verdes.",
    ranking_local: 3, ranking_visitante: 56, favorito: "local"
  },
  {
    id: "H2J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Uruguay bajo Marcelo Bielsa promedia una cantidad inmensa de recuperaciones en campo rival, algo que puede abrumar a Cabo Verde.",
      visitante: "Cabo Verde es un equipo muy técnico y veloz que no tiene miedo de proponer un intercambio de golpes contra equipos grandes."
    },
    jugador_a_seguir: {
      local: { nombre: "Federico Valverde", posicion: "Mediocentro", razon: "Su despliegue 'box-to-box' y su potente disparo lejano son fundamentales para romper el equilibrio." },
      visitante: { nombre: "Bebé", posicion: "Delantero", razon: "Su potencia física y golpeo a larga distancia son las mejores armas para intentar sorprender a la Celeste." }
    },
    hype: "La presión infernal de Bielsa se enfrenta a la frescura de los Tiburones Azules.",
    ranking_local: 14, ranking_visitante: 68, favorito: "local"
  },
  {
    id: "H1J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Cabo Verde llega con la motivación de enfrentarse a un histórico mundialista, buscando cerrar su debut con un resultado épico.",
      visitante: "Uruguay no puede permitirse un tropiezo ante un rival menor si quiere mantener sus aspiraciones de llegar lejos en el torneo."
    },
    jugador_a_seguir: {
      local: { nombre: "Garry Rodrigues", posicion: "Extremo", razon: "Su experiencia internacional y velocidad son las armas para buscar la espalda de los laterales uruguayos." },
      visitante: { nombre: "Manuel Ugarte", posicion: "Mediocentro", razon: "Su capacidad para recuperar balones y distribuir rápido es la base del sistema de Bielsa." }
    },
    hype: "La ilusión azul de Cabo Verde desafía a la historia celeste.",
    ranking_local: 68, ranking_visitante: 14, favorito: "visitante"
  },
  {
    id: "H2J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (España ganó 1-0 en 2006); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Arabia Saudita buscará repetir su hazaña de 2022 ante otra campeona del mundo, confiando en su conocimiento del clima y el entorno.",
      visitante: "España buscará asegurar el primer puesto del grupo con su estilo de posesión, tratando de evitar las transiciones árabes."
    },
    jugador_a_seguir: {
      local: { nombre: "Mohammed Kanno", posicion: "Mediocentro", razon: "Su despliegue físico y buen trato de balón serán vitales para competir con el mediocampo español." },
      visitante: { nombre: "Nico Williams", posicion: "Extremo", razon: "Su verticalidad es el antídoto perfecto si Arabia decide plantar una línea defensiva adelantada." }
    },
    hype: "La técnica de España contra la fe inquebrantable de los Halcones Verdes.",
    ranking_local: 56, ranking_visitante: 3, favorito: "visitante"
  },

  // ─── GRUPO I ─────────────────────────────────────────────────────────────
  {
    id: "I1J1",
    historia: "Un solo enfrentamiento en Copa del Mundo (Senegal ganó 1-0 en el partido inaugural de Corea-Japón 2002); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Francia llega herida tras perder la final de 2022, con la plantilla más profunda del mundo y el objetivo de su tercera estrella.",
      visitante: "Senegal es el gigante de África que busca revancha de aquel 2002, manteniendo un bloque defensivo casi impenetrable."
    },
    jugador_a_seguir: {
      local: { nombre: "Kylian Mbappé", posicion: "Delantero", razon: "El mejor jugador del planeta quiere seguir batiendo récords goleadores en Mundiales desde el primer minuto." },
      visitante: { nombre: "Nicolas Jackson", posicion: "Delantero", razon: "Su potencia para correr al espacio será la principal herramienta para castigar la línea adelantada francesa." }
    },
    hype: "Revancha histórica: ¿Podrán los Leones de la Teranga repetir el milagro ante 'Les Bleus'?",
    ranking_local: 2, ranking_visitante: 20, favorito: "local"
  },
  {
    id: "I2J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Irak regresa al Mundial después de 40 años (México 1986), tras una eliminatoria asiática impecable que devolvió la ilusión a su pueblo.",
      visitante: "Noruega cuenta con el delantero más letal del mundo, buscando clasificar a octavos por primera vez desde Francia 1998."
    },
    jugador_a_seguir: {
      local: { nombre: "Aymen Hussein", posicion: "Delantero centro", razon: "El ídolo de la afición iraquí; su fortaleza física será clave para pelear balones contra los centrales noruegos." },
      visitante: { nombre: "Erling Haaland", posicion: "Delantero centro", razon: "El 'Androide' debuta en un Mundial con hambre de gol; frenarlo es una tarea que parece imposible para defensas debutantes." }
    },
    hype: "El regreso de los Leones de Mesopotamia contra la fuerza imparable del Vikingo Haaland.",
    ranking_local: 58, ranking_visitante: 36, favorito: "visitante"
  },
  {
    id: "I1J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Francia ha ganado todos sus partidos contra selecciones de la confederación asiática en la historia de los Mundiales.",
      visitante: "Irak buscará realizar el partido perfecto defensivamente, sabiendo que puntuar ante Francia sería el mayor logro de su historia."
    },
    jugador_a_seguir: {
      local: { nombre: "Antoine Griezmann", posicion: "Mediapunta", razon: "El cerebro táctico; su movimiento entre líneas es indescifrable para defensas poco acostumbradas a su nivel." },
      visitante: { nombre: "Zidane Iqbal", posicion: "Mediocentro", razon: "El talento más puro de Irak; su capacidad para retener el balón será el único respiro de su selección." }
    },
    hype: "La constelación francesa frente a la ilusión de los Leones de Mesopotamia.",
    ranking_local: 2, ranking_visitante: 58, favorito: "local"
  },
  {
    id: "I2J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Senegal suele dominar físicamente a los equipos europeos de segundo orden, basando su éxito en una intensidad que no decae en los 90 minutos.",
      visitante: "Noruega depende en gran medida de que el balón llegue limpio a sus atacantes, algo difícil ante la presión senegalesa."
    },
    jugador_a_seguir: {
      local: { nombre: "Kalidou Koulibaly", posicion: "Defensa central", razon: "Será el encargado directo de vigilar a Haaland en el duelo físico más imponente de la fase de grupos." },
      visitante: { nombre: "Martin Ødegaard", posicion: "Mediocentro ofensivo", razon: "Su visión de juego es la única forma de encontrar grietas en la rocosa estructura defensiva africana." }
    },
    hype: "Poderío africano contra la precisión del arquitecto Ødegaard.",
    ranking_local: 20, ranking_visitante: 36, favorito: "equilibrado"
  },
  {
    id: "I1J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Francia ganó 3-1 en 1938) y en Eliminatorias con varios triunfos franceses.",
    datos: {
      local: "Noruega buscará su primera victoria mundialista ante Francia en casi un siglo, liderados por un ataque que asusta a cualquier defensa.",
      visitante: "Francia sabe que contra Haaland no puede haber errores; su enfoque será controlar el balón para que el noruego no participe."
    },
    jugador_a_seguir: {
      local: { nombre: "Alexander Sørloth", posicion: "Delantero", razon: "Su juego aéreo y potencia física pueden ser el complemento ideal para que Haaland encuentre espacios." },
      visitante: { nombre: "William Saliba", posicion: "Defensa central", razon: "Su velocidad y jerarquía son la mejor respuesta que tiene Francia para frenar los ataques noruegos." }
    },
    hype: "Duelo de artillería: Haaland desafía al imperio de Mbappé.",
    ranking_local: 36, ranking_visitante: 2, favorito: "visitante"
  },
  {
    id: "I2J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Irak llegará a este último partido con la garra que les caracteriza, buscando un resultado histórico para el fútbol de su país.",
      visitante: "Senegal confía en su superioridad técnica para cerrar la fase de grupos con una victoria que los coloque en octavos."
    },
    jugador_a_seguir: {
      local: { nombre: "Ali Jasim", posicion: "Mediocampista", razon: "La joven promesa de Irak; su visión de juego es necesaria para conectar con los delanteros ante los potentes africanos." },
      visitante: { nombre: "Sadio Mané", posicion: "Extremo/Delantero", razon: "La leyenda senegalesa buscará liderar con su experiencia y capacidad goleadora en este partido clave." }
    },
    hype: "La pasión de Mesopotamia contra la fuerza de los Leones de la Teranga.",
    ranking_local: 58, ranking_visitante: 20, favorito: "visitante"
  },

  // ─── GRUPO J ─────────────────────────────────────────────────────────────
  {
    id: "J1J1",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Argentina llega como campeona defensora por segunda vez en su historia, liderada por un Messi que busca cerrar su leyenda eterna.",
      visitante: "Argelia vuelve al Mundial con un equipo técnico y aguerrido que siempre se crece ante las potencias mundiales."
    },
    jugador_a_seguir: {
      local: { nombre: "Lionel Messi", posicion: "Mediapunta", razon: "En su último baile, cada toque de balón es historia pura; su visión abrirá la cerrada defensa argelina." },
      visitante: { nombre: "Riyad Mahrez", posicion: "Extremo derecho", razon: "Su zurda prodigiosa es capaz de decidir un partido en una jugada a balón parado o un recorte hacia adentro." }
    },
    hype: "La defensa de la corona del Rey comienza contra el orgullo del desierto argelino.",
    ranking_local: 1, ranking_visitante: 40, favorito: "local"
  },
  {
    id: "J2J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Austria presenta un equipo basado en la intensidad y el despliegue físico del modelo Red Bull, siendo uno de los rivales más incómodos de Europa.",
      visitante: "Jordania debuta en una Copa del Mundo tras una gesta histórica en las eliminatorias asiáticas que sorprendió a todo el continente."
    },
    jugador_a_seguir: {
      local: { nombre: "Marcel Sabitzer", posicion: "Mediocentro", razon: "Su llegada desde atrás y pegada de media distancia son las mejores armas austriacas contra defensas replegadas." },
      visitante: { nombre: "Mousa Al-Tamari", posicion: "Extremo", razon: "Apodado el 'Messi Jordano', su habilidad individual es la única esperanza de su país para generar peligro." }
    },
    hype: "La presión asfixiante de los Alpes contra el corazón indomable del debutante jordano.",
    ranking_local: 31, ranking_visitante: 70, favorito: "local"
  },
  {
    id: "J1J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Jordania llega como el equipo con menos que perder del grupo, lo que les permite jugar con una libertad que suele complicar a los favoritos.",
      visitante: "Argelia posee una de las aficiones más apasionadas de África que se hará sentir como si jugaran en casa ante los jordanos."
    },
    jugador_a_seguir: {
      local: { nombre: "Yazan Al-Naimat", posicion: "Delantero", razon: "Su picardía y movilidad serán claves para intentar generar faltas cerca del área argelina." },
      visitante: { nombre: "Ismaël Bennacer", posicion: "Mediocentro", razon: "Su control del juego y capacidad para recuperar balones son los que permiten que Argelia domine los partidos." }
    },
    hype: "Duelo árabe por la gloria mundialista: Técnica contra corazón.",
    ranking_local: 70, ranking_visitante: 40, favorito: "visitante"
  },
  {
    id: "J2J2",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Austria ganó 3-1 en Suecia 1958); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Argentina nunca ha perdido contra Austria en la era moderna, pero este equipo europeo es el más organizado que han enfrentado recientemente.",
      visitante: "Austria buscará repetir la hazaña de 1958, sabiendo que su única opción es llevar a Argentina a un partido de mucho desgaste físico."
    },
    jugador_a_seguir: {
      local: { nombre: "Julián Álvarez", posicion: "Delantero", razon: "Su presión incansable será fundamental para desestabilizar la salida de balón de los centrales austriacos." },
      visitante: { nombre: "Konrad Laimer", posicion: "Mediocentro", razon: "Un especialista en la presión tras pérdida; su misión será no dejar pensar a los volantes argentinos." }
    },
    hype: "La Albiceleste busca blindar su camino ante el rigor de los Alpes.",
    ranking_local: 1, ranking_visitante: 31, favorito: "local"
  },
  {
    id: "J1J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Austria ganó 2-0 en 1982); sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Argelia buscará vengar la derrota de España '82, un partido que los argelinos aún recuerdan como una gran injusticia deportiva.",
      visitante: "Austria sabe que un empate podría ser suficiente para clasificar y plantearán un partido de mucho control y pocas concesiones."
    },
    jugador_a_seguir: {
      local: { nombre: "Mohammed Amoura", posicion: "Delantero", razon: "Su velocidad eléctrica puede ser la llave para romper la adelantada y física defensa austriaca." },
      visitante: { nombre: "Kevin Danso", posicion: "Defensa central", razon: "Su fortaleza física será necesaria para frenar los intentos de ataque de los habilidosos argelinos." }
    },
    hype: "Cuentas pendientes: Argelia busca justicia histórica ante el orden austriaco.",
    ranking_local: 40, ranking_visitante: 31, favorito: "equilibrado"
  },
  {
    id: "J2J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Jordania vive un sueño y enfrentarse a Argentina es el punto culminante de su historia futbolística, sin nada que perder.",
      visitante: "Argentina buscará una victoria plácida para rotar jugadores y llegar con sus estrellas frescas a la fase de eliminación directa."
    },
    jugador_a_seguir: {
      local: { nombre: "Noor Al-Rawabdeh", posicion: "Mediocentro", razon: "Deberá realizar el partido de su vida para intentar frenar la fluidez del mediocampo argentino." },
      visitante: { nombre: "Alexis Mac Allister", posicion: "Mediocampista", razon: "Su capacidad para llegar al área desde segunda línea será fundamental para romper la defensa jordana." }
    },
    hype: "La humildad del reino hachemita desafía al trono eterno del rey Lionel.",
    ranking_local: 70, ranking_visitante: 1, favorito: "visitante"
  },

  // ─── GRUPO K ─────────────────────────────────────────────────────────────
  {
    id: "K1J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Portugal llega con un arsenal ofensivo inagotable en el que parece ser el último torneo de la legendaria figura de Cristiano Ronaldo.",
      visitante: "RD Congo vuelve al Mundial tras 52 años (Zaire 1974), con un plantel de jugadores potentes que triunfan en ligas europeas."
    },
    jugador_a_seguir: {
      local: { nombre: "Bruno Fernandes", posicion: "Mediocampista", razon: "El verdadero motor del equipo; de su capacidad para filtrar pases dependerá la eficacia goleadora lusa." },
      visitante: { nombre: "Yoane Wissa", posicion: "Delantero", razon: "Su velocidad punta pondrá en aprietos a la veterana pareja de centrales portugueses en cada contragolpe." }
    },
    hype: "Navegantes europeos contra el rugido recuperado del Congo en el escenario mayor.",
    ranking_local: 8, ranking_visitante: 75, favorito: "local"
  },
  {
    id: "K2J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Uzbekistán debuta en un Mundial tras años quedándose en la puerta, consolidando un proyecto serio de formación de jugadores técnicos.",
      visitante: "Colombia regresa al Mundial con un invicto prolongado y un James Rodríguez que parece haber recuperado su mejor versión de 2014."
    },
    jugador_a_seguir: {
      local: { nombre: "Eldor Shomurodov", posicion: "Delantero centro", razon: "La máxima referencia uzbeka; su experiencia en la Serie A italiana es vital para competir ante defensas sudamericanas." },
      visitante: { nombre: "Luis Díaz", posicion: "Extremo izquierdo", razon: "Su desequilibrio por banda es la principal pesadilla para cualquier lateral; es el jugador más eléctrico de Sudamérica." }
    },
    hype: "La seda de Uzbekistán se enfrenta al ritmo frenético del renacer cafetero.",
    ranking_local: 65, ranking_visitante: 9, favorito: "visitante"
  },
  {
    id: "K1J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Portugal suele definir sus grupos temprano y buscará asegurar el pase ante un equipo uzbeko que debuta contra la élite europea.",
      visitante: "Uzbekistán basa su juego en el bloque medio-bajo y transiciones veloces, intentando aprovechar cualquier exceso de confianza luso."
    },
    jugador_a_seguir: {
      local: { nombre: "Rafael Leão", posicion: "Extremo izquierdo", razon: "Su potencia en el uno contra uno es prácticamente imparable para defensas que no están acostumbradas a su ritmo." },
      visitante: { nombre: "Abbosbek Fayzullaev", posicion: "Extremo", razon: "La joven promesa de Uzbekistán; su atrevimiento será la principal preocupación para los laterales de Portugal." }
    },
    hype: "Los Navegantes quieren conquistar la Ruta de la Seda en el césped mundialista.",
    ranking_local: 8, ranking_visitante: 65, favorito: "local"
  },
  {
    id: "K2J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "RD Congo es un equipo sumamente fuerte en los duelos individuales, lo que puede complicar el juego de asociación que propone Colombia.",
      visitante: "Colombia tiene un registro muy positivo contra selecciones africanas en los últimos Mundiales (victorias contra Costa de Marfil y Senegal)."
    },
    jugador_a_seguir: {
      local: { nombre: "Chancel Mbemba", posicion: "Defensa central", razon: "El capitán y líder; su jerarquía es necesaria para organizar la defensa ante la avalancha ofensiva colombiana." },
      visitante: { nombre: "James Rodríguez", posicion: "Mediapunta", razon: "Su pegada y visión siguen siendo de clase mundial; un balón parado suyo puede ser la diferencia." }
    },
    hype: "El ritmo cafetero se pone a prueba ante la potencia indomable del Congo.",
    ranking_local: 75, ranking_visitante: 9, favorito: "visitante"
  },
  {
    id: "K1J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Colombia llega con un fútbol que enamora a Sudamérica, basado en la posesión y en la explosividad de sus bandas.",
      visitante: "Portugal sabe que Colombia es el rival más fuerte del grupo y no se guardará nada para asegurar el primer puesto."
    },
    jugador_a_seguir: {
      local: { nombre: "Richard Ríos", posicion: "Mediocentro", razon: "Su despliegue físico y técnico será vital para competir de tú a tú con los volantes portugueses." },
      visitante: { nombre: "Bernardo Silva", posicion: "Mediocampista", razon: "Su inteligencia táctica le permite aparecer en cualquier zona del campo para generar superioridades." }
    },
    hype: "Duelo de elegancia: El sabor del café contra la maestría lusa por el liderato.",
    ranking_local: 9, ranking_visitante: 8, favorito: "equilibrado"
  },
  {
    id: "K2J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "RD Congo buscará imponer su mayor envergadura física ante un equipo uzbeko que prefiere el juego a ras de suelo.",
      visitante: "Uzbekistán llega con la lección aprendida de sus partidos anteriores, sabiendo que la paciencia es su mejor aliada."
    },
    jugador_a_seguir: {
      local: { nombre: "Silas Katompa Mvumpa", posicion: "Extremo", razon: "Su velocidad y potencia pueden ser imparables si encuentra espacios a la espalda de la defensa uzbeka." },
      visitante: { nombre: "Otabek Shukurov", posicion: "Mediocentro", razon: "El equilibrio del equipo uzbeko; su capacidad para distribuir será la base del juego de su selección." }
    },
    hype: "Potencia centroafricana contra la técnica de la estepa uzbeka.",
    ranking_local: 75, ranking_visitante: 65, favorito: "equilibrado"
  },

  // ─── GRUPO L ─────────────────────────────────────────────────────────────
  {
    id: "L1J1",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Croacia ganó 2-1 en la semifinal de Rusia 2018) y 4 veces en Eliminatorias Euro con triunfos repartidos de ambos lados.",
    datos: {
      local: "Inglaterra busca desesperadamente 'traer el fútbol a casa' tras décadas de decepciones, contando con la plantilla más cara del torneo.",
      visitante: "Croacia, el pequeño gigante que nunca se rinde, busca su tercer podio mundialista consecutivo con un mediocampo eterno."
    },
    jugador_a_seguir: {
      local: { nombre: "Jude Bellingham", posicion: "Mediocampista", razon: "Su despliegue físico y llegada al área lo convierten en el jugador más determinante de los 'Three Lions' actualmente." },
      visitante: { nombre: "Luka Modric", posicion: "Mediocentro", razon: "En su adiós definitivo, el genio de Zadar intentará dar una última lección de control ante la potencia inglesa." }
    },
    hype: "Duelo de realeza futbolística: La potencia de los inventores contra el talento inagotable de los Balcanes.",
    ranking_local: 4, ranking_visitante: 12, favorito: "equilibrado"
  },
  {
    id: "L2J1",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Ghana busca redención tras su eliminación en 2022, confiando en una nueva camada de jugadores nacidos en Europa que eligieron representar a las Estrellas Negras.",
      visitante: "Panamá asiste a su segundo Mundial con un equipo mucho más maduro que el de 2018, basado en un juego asociativo muy vistoso."
    },
    jugador_a_seguir: {
      local: { nombre: "Mohammed Kudus", posicion: "Mediapunta", razon: "Su capacidad de conducción y disparo lejano lo hacen el jugador más peligroso y creativo de todo el continente africano." },
      visitante: { nombre: "Adalberto Carrasquilla", posicion: "Mediocentro", razon: "El cerebro del equipo canalero; si él logra imponer su ritmo, Panamá puede dominar la posesión ante los africanos." }
    },
    hype: "La potencia de las Estrellas Negras frente al crecimiento imparable del fútbol canalero.",
    ranking_local: 60, ranking_visitante: 50, favorito: "equilibrado"
  },
  {
    id: "L1J2",
    historia: "Primer enfrentamiento en Copa del Mundo; sin historial en eliminatorias por confederaciones distintas.",
    datos: {
      local: "Inglaterra no suele tener problemas ante equipos africanos en grupos, pero Ghana es históricamente el equipo más europeo de ese continente.",
      visitante: "Ghana recuerda con dolor su eliminación contra Uruguay en 2010 y busca que este Mundial sea el de su consagración definitiva."
    },
    jugador_a_seguir: {
      local: { nombre: "Harry Kane", posicion: "Delantero centro", razon: "El máximo goleador inglés siempre aparece en estos cruces para dar calma a su selección." },
      visitante: { nombre: "Iñaki Williams", posicion: "Delantero", razon: "Su velocidad punta será la prueba máxima para la velocidad de los defensores centrales ingleses." }
    },
    hype: "La corona británica ante el brillo de las Estrellas Negras.",
    ranking_local: 4, ranking_visitante: 60, favorito: "local"
  },
  {
    id: "L2J2",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Panamá ha crecido tácticamente bajo un modelo europeo, lo que les permitirá competir de igual a igual en lo estratégico contra Croacia.",
      visitante: "Croacia es maestra en llevar los partidos a su ritmo lento de posesión, algo que puede desesperar al equipo panameño."
    },
    jugador_a_seguir: {
      local: { nombre: "José Córdoba", posicion: "Defensa central", razon: "Su juventud y velocidad son necesarias para corregir los espacios ante los desmarques croatas." },
      visitante: { nombre: "Joško Gvardiol", posicion: "Defensa/Lateral", razon: "Su capacidad para romper líneas desde la defensa será un problema constante para el planteamiento panameño." }
    },
    hype: "La marea roja desafía a los eternos maestros del ajedrez croata.",
    ranking_local: 50, ranking_visitante: 12, favorito: "visitante"
  },
  {
    id: "L1J3",
    historia: "Se han enfrentado 1 vez en Copa del Mundo (Inglaterra ganó 6-1 en Rusia 2018); sin historial en eliminatorias.",
    datos: {
      local: "Panamá busca borrar la imagen de la goleada sufrida en 2018, llegando con un equipo mucho más ordenado tácticamente.",
      visitante: "Inglaterra llega como una de las grandes favoritas al título, con una profundidad de plantilla que asusta a cualquier rival."
    },
    jugador_a_seguir: {
      local: { nombre: "Ismael Díaz", posicion: "Delantero", razon: "Su movilidad y capacidad de asociación serán las mejores armas panameñas para incomodar a la zaga inglesa." },
      visitante: { nombre: "Phil Foden", posicion: "Mediapunta", razon: "Su capacidad para jugar entre líneas y su visión de juego son de lo mejor del mundo actualmente." }
    },
    hype: "Revancha canalera: Panamá quiere desafiar a los inventores del fútbol.",
    ranking_local: 50, ranking_visitante: 4, favorito: "visitante"
  },
  {
    id: "L2J3",
    historia: "Primer enfrentamiento en la historia entre ambas selecciones.",
    datos: {
      local: "Croacia se juega la vida en este último partido, confiando en su experiencia en situaciones de máxima presión.",
      visitante: "Ghana llega con un equipo muy joven que no teme a los nombres propios, buscando una clasificación histórica ante la vigente medallista."
    },
    jugador_a_seguir: {
      local: { nombre: "Mateo Kovacic", posicion: "Mediocentro", razon: "Su capacidad para romper líneas mediante la conducción será vital contra la presión física ghanesa." },
      visitante: { nombre: "Ernest Nuamah", posicion: "Extremo", razon: "Su velocidad y descaro serán la mayor amenaza para la a veces lenta defensa croata." }
    },
    hype: "Experiencia balcánica contra la rebeldía de las Estrellas Negras.",
    ranking_local: 12, ranking_visitante: 60, favorito: "local"
  }
];
