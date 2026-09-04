const FONT_PRESETS = {
  'space-grotesk': {
    name: 'Grotesk / Mono',
    display: "'Space Grotesk', sans-serif",
    body: "'Manrope', sans-serif",
    mono: "'JetBrains Mono', monospace",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Manrope:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  },
  'serif-elegant': {
    name: 'Serif / Elegant',
    display: "'Fraunces', serif",
    body: "'Manrope', sans-serif",
    mono: "'JetBrains Mono', monospace",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Manrope:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  },
  'mono-brutalist': {
    name: 'All Mono / Brutalist',
    display: "'JetBrains Mono', monospace",
    body: "'JetBrains Mono', monospace",
    mono: "'JetBrains Mono', monospace",
    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
  },
  'classic-sans': {
    name: 'Sora / Clean',
    display: "'Sora', sans-serif",
    body: "'Manrope', sans-serif",
    mono: "'JetBrains Mono', monospace",
    href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Manrope:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  },
  'poster-bold': {
    name: 'Bebas / Poster',
    display: "'Bebas Neue', sans-serif",
    body: "'Manrope', sans-serif",
    mono: "'JetBrains Mono', monospace",
    href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  },
  'cyber': {
    name: 'Chakra / Cyber',
    display: "'Chakra Petch', sans-serif",
    body: "'Chakra Petch', sans-serif",
    mono: "'JetBrains Mono', monospace",
    href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  }
};

const ICONS = {
  twitter: "<path d=\"M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z\" fill=\"currentColor\" stroke=\"none\"/>",
  github: "<path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\" fill=\"currentColor\" stroke=\"none\"/>",
  discord: "<path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\" fill=\"currentColor\" stroke=\"none\"/>",
  instagram: "<path d=\"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077\" fill=\"currentColor\" stroke=\"none\"/>",
  youtube: "<path d=\"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\" fill=\"currentColor\" stroke=\"none\"/>",
  tiktok: "<path d=\"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z\" fill=\"currentColor\" stroke=\"none\"/>",
  spotify: "<path d=\"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z\" fill=\"currentColor\" stroke=\"none\"/>",
  twitch: "<path d=\"M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z\" fill=\"currentColor\" stroke=\"none\"/>",
  telegram: "<path d=\"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z\" fill=\"currentColor\" stroke=\"none\"/>",
  website: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z\"/>",
  email: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 6l9 7 9-7\"/>",
  kick: "<path d=\"M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z\" fill=\"currentColor\" stroke=\"none\"/>",
  reddit: "<path d=\"M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z\" fill=\"currentColor\" stroke=\"none\"/>",
  steam: "<path d=\"M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z\" fill=\"currentColor\" stroke=\"none\"/>",
  roblox: "<path d=\"M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z\" fill=\"currentColor\" stroke=\"none\"/>",
  minecraft: "<rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"/><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"/><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"/><rect x=\"13\" y=\"13\" width=\"7\" height=\"7\"/>",
  namemc: "<path d=\"M0 0v24h24V0Zm4.8 4.8H16V8h3.2v11.2H16V8H8v11.2H4.8V8Z\" fill=\"currentColor\" stroke=\"none\"/>",
  xbox: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 8l8 8M16 8l-8 8\" stroke-linecap=\"round\"/>",
  psn: "<path d=\"M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z\" fill=\"currentColor\" stroke=\"none\"/>",
  snapchat: "<path d=\"M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z\" fill=\"currentColor\" stroke=\"none\"/>",
  linkedin: "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><circle cx=\"7.2\" cy=\"7.6\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M7.2 10.5v7M11 10.5v7M11 13.6c0-1.8 1.3-3.1 3-3.1s3 1.1 3 3.2v3.8\"/>",
  facebook: "<path d=\"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z\" fill=\"currentColor\" stroke=\"none\"/>",
  threads: "<path d=\"M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z\" fill=\"currentColor\" stroke=\"none\"/>",
  bluesky: "<path d=\"M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026\" fill=\"currentColor\" stroke=\"none\"/>",
  pinterest: "<path d=\"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z\" fill=\"currentColor\" stroke=\"none\"/>",
  soundcloud: "<path d=\"M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z\" fill=\"currentColor\" stroke=\"none\"/>",
  applemusic: "<path d=\"M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z\" fill=\"currentColor\" stroke=\"none\"/>",
  bandcamp: "<path d=\"M0 18.75l7.437-13.5H24l-7.438 13.5H0z\" fill=\"currentColor\" stroke=\"none\"/>",
  lastfm: "<path d=\"M4 15V9M8.4 15V6M12.8 15V11M17.2 15V4M21 15v-6\" stroke-linecap=\"round\"/>",
  paypal: "<path d=\"M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z\" fill=\"currentColor\" stroke=\"none\"/>",
  cashapp: "<path d=\"M23.59 3.475a5.1 5.1 0 00-3.05-3.05c-1.31-.42-2.5-.42-4.92-.42H8.36c-2.4 0-3.61 0-4.9.4a5.1 5.1 0 00-3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 003.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 003.06-3.06c.41-1.3.41-2.5.41-4.9v-7.25c0-2.41 0-3.61-.41-4.91zm-6.17 4.63l-.93.93a.5.5 0 01-.67.01 5 5 0 00-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 01-.48.39H9.63l-.09-.01a.5.5 0 01-.38-.59l.28-1.27a6.54 6.54 0 01-2.88-1.57v-.01a.48.48 0 010-.68l1-.97a.49.49 0 01.67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 01.48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z\" fill=\"currentColor\" stroke=\"none\"/>",
  venmo: "<path d=\"M21.772 13.119c-.267 0-.381-.251-.38-.655 0-.533.121-1.575.712-1.575.267 0 .357.243.357.598 0 .533-.13 1.632-.689 1.632Zm.502-3.377c-1.677 0-2.405 1.285-2.405 2.658 0 1.042.421 1.874 1.693 1.874 1.717 0 2.438-1.406 2.438-2.763 0-1.025-.462-1.769-1.726-1.769Zm-3.833 0c-.558 0-.964.17-1.393.477-.154-.275-.462-.477-.932-.477-.542 0-.947.219-1.247.437l-.04-.364H13.54l-.688 4.354h1.506l.479-3.053c.129-.065.323-.154.518-.154.145 0 .267.049.267.267 0 .056-.016.145-.024.218l-.429 2.722h1.498l.478-3.053c.138-.073.324-.154.51-.154.146 0 .268.049.268.267 0 .056-.017.145-.025.218l-.429 2.722h1.499l.461-2.908c.025-.153.049-.388.049-.549 0-.582-.267-.97-1.037-.97Zm-6.871 0c-.575 0-.98.219-1.287.421l-.017-.348H8.962l-.689 4.354H9.78l.478-3.053c.13-.065.324-.154.518-.154.147 0 .268.049.268.242 0 .081-.024.227-.032.299l-.422 2.666h1.499l.462-2.908c.024-.153.049-.388.049-.549 0-.582-.268-.97-1.03-.97Zm-5.631 1.834c.041-.485.413-.824.697-.824.162 0 .299.097.299.291 0 .404-.713.533-.996.533Zm.843-1.834c-1.604 0-2.382 1.39-2.382 2.698 0 1.01.478 1.817 1.814 1.817.527 0 1.07-.113 1.418-.282l.186-1.26c-.494.25-.874.347-1.271.347-.365 0-.64-.194-.64-.687.826-.008 2.252-.347 2.252-1.453 0-.687-.494-1.18-1.377-1.18Zm-4.239.267c.089.186.146.412.146.743 0 .606-.429 1.494-.777 2.06l-.373-2.989L0 9.969l.705 4.2h1.757c.77-1.01 1.718-2.448 1.718-3.554 0-.347-.073-.622-.235-.889l-1.402.283Z\" fill=\"currentColor\" stroke=\"none\"/>",
  linktree: "<path d=\"m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z\" fill=\"currentColor\" stroke=\"none\"/>",
  beacons: "<path d=\"M12 3v3.2M7.5 8.7a5.4 5.4 0 019 0M4 21l3.2-9.6h9.6L20 21\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  anilist: "<path d=\"M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96-1.69-5.014-1.541 5.015h3.23z\" fill=\"currentColor\" stroke=\"none\"/>",
  gitlab: "<path d=\"m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z\" fill=\"currentColor\" stroke=\"none\"/>"
};

const ICON_HEX = {
  twitter: "#000000",
  github: "#181717",
  discord: "#5865F2",
  instagram: "#FF0069",
  youtube: "#FF0000",
  tiktok: "#000000",
  spotify: "#1ED760",
  twitch: "#9146FF",
  telegram: "#26A5E4",
  kick: "#53FC19",
  reddit: "#FF4500",
  steam: "#000000",
  roblox: "#000000",
  snapchat: "#FFFC00",
  soundcloud: "#FF5500",
  bluesky: "#1185FE",
  threads: "#000000",
  facebook: "#0866FF",
  pinterest: "#BD081C",
  paypal: "#002991",
  psn: "#0070D1",
  gitlab: "#FC6D26",
  cashapp: "#00C244",
  venmo: "#008CFF",
  linktree: "#43E55E",
  namemc: "#12161A",
  anilist: "#02A9FF",
  bandcamp: "#408294",
  applemusic: "#FA243C"
};

function monogram(p) {
  return (p || '?').slice(0, 2).toUpperCase();
}

const BADGES = {
  verified: { glyph: '✓', color: '#8b7cf6', name: 'Verified' },
  premium:  { glyph: '♦', color: '#f6c343', name: 'Premium' },
  staff:    { glyph: '⚑', color: '#f65b5b', name: 'Staff' },
  legend:   { glyph: '★', color: '#f6a56b', name: 'Legend' },
  shield:   { glyph: '⛨', color: '#7fb8f6', name: 'Shield' },
  heart:    { glyph: '♥', color: '#f68fb0', name: 'Heart' },
  crown:    { glyph: '♛', color: '#f6d55c', name: 'Crown' },
  gift:     { glyph: '🎁', color: '#7fd8a6', name: 'Gift' },
  trophy:   { glyph: '🏆', color: '#f6a56b', name: 'Trophy' },
  booster:  { glyph: '⚡', color: '#c78bf6', name: 'Booster' },
  bug:      { glyph: '🐞', color: '#f65b5b', name: 'Bug hunter' },
  og:       { glyph: '⬥', color: '#8a8ea3', name: 'OG' }
};

function esc(str) {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function safeJson(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function buildPublicHTML(c, opts) {
  opts = opts || {};
  const realViews = typeof opts.views === 'number' ? opts.views : 0;
  const fp = FONT_PRESETS[c.theme.font] || FONT_PRESETS['cyber'];
  const avatarShapeRadius = c.theme.avatarShape === 'circle' ? '50%' : '22%';
  const glowStrength = (c.theme.glow || 50) / 100;
  const cardBlur = Math.max(0, Math.min(40, c.theme.cardBlur != null ? c.theme.cardBlur : 26));
  const glassAlpha = Math.max(0.15, Math.min(0.95, (c.theme.glass != null ? c.theme.glass : 62) / 100));
  const glowSocials = c.theme.glowSocials !== false;
  const glowBadges = c.theme.glowBadges !== false;
  const glowUsername = !!c.theme.glowUsername;
  const monochromeIcons = c.theme.monochromeIcons !== false;
  const iconColor = c.theme.iconColor || 'var(--text)';
  const textColor = c.theme.textColor || '#eceef5';
  const bgColor = c.theme.backgroundColor || '#0a0a10';
  const swapBoxColors = !!c.theme.swapBoxColors;
  const panelCss = swapBoxColors
    ? `${c.theme.accent1}${Math.round(glassAlpha * 255).toString(16).padStart(2, '0')}`
    : `rgba(19,20,32,${glassAlpha.toFixed(2)})`;
  const borderHiCss = swapBoxColors ? c.theme.accent2 : 'rgba(255,255,255,0.15)';

  const bannerBg = c.identity.bannerImg
    ? `background-image:url('${esc(c.identity.bannerImg)}');background-size:cover;background-position:center;`
    : `background:radial-gradient(ellipse 90% 140% at 30% -20%, ${c.theme.accent1}66, transparent 60%), radial-gradient(ellipse 70% 120% at 90% 0%, ${c.theme.accent2}44, transparent 60%), linear-gradient(160deg, #191a29, #0f1019);`;

  const effectiveAvatarImg = (c.identity.useDiscordAvatar && c.identity.discordAvatarUrl)
    ? c.identity.discordAvatarUrl
    : c.identity.avatarImg;
  const avatarInner = effectiveAvatarImg
    ? `<img src="${esc(effectiveAvatarImg)}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" alt="">`
    : esc(c.identity.avatarText || '?');
  const avatarDecorationHTML = (c.identity.discordAvatarDecoration && c.identity.avatarDecorationImg)
    ? `<img src="${esc(c.identity.avatarDecorationImg)}" class="avatar-decoration" alt="">`
    : '';

  const bgLayer = ({
    particles: `<canvas id="bg-canvas"></canvas>`,
    grid: `<div class="bg-grid"></div>`,
    plasma: `<div class="bg-plasma"><span></span><span></span></div>`,
    aurora: `<div class="bg-aurora"><span></span><span></span><span></span></div>`,
    snow: `<canvas id="bg-canvas"></canvas>`,
    rain: `<canvas id="bg-canvas"></canvas>`,
    fireflies: `<canvas id="bg-canvas"></canvas>`,
    dither: `<div class="bg-dither"></div>`,
    image: `<div class="bg-image"></div>`,
    video: `<video class="bg-video" autoplay muted loop playsinline src="${esc(c.background.mediaUrl || '')}"></video>`,
    none: `<div class="bg-flat"></div>`
  })[c.background.style] || `<canvas id="bg-canvas"></canvas>`;

  const socialsHTML = (c.socials || []).map(s => {
    // platform used for click analytics
    const plat = (s.platform || 'link').toLowerCase();
    const thisIconColor = (!monochromeIcons && ICON_HEX[plat]) ? ICON_HEX[plat] : iconColor;
    const colorStyle = `style="color:${esc(thisIconColor)}"`;
    let iconHTML = '';
    if (s.platform === 'website' || s.platform === 'custom' || !ICONS[s.platform]) {
      try {
        const url = new URL(s.url.startsWith('http') ? s.url : 'https://' + s.url);
        const domain = url.hostname;
        iconHTML = `<img src="https://www.google.com/s2/favicons?domain=${esc(domain)}&sz=64" style="width:18px;height:18px;border-radius:4px;" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" style="display:none;width:16px;height:16px;color:${esc(thisIconColor)}"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z"/></svg>`;
      } catch (e) {
        iconHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ${colorStyle}>${ICONS.website}</svg>`;
      }
    } else {
      iconHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ${colorStyle}>${ICONS[s.platform]}</svg>`;
    }
    return `<a class="social" href="${esc(s.url)}" target="_blank" rel="noopener" data-platform="${esc(plat)}" title="${esc(s.label || s.platform)}">${iconHTML}</a>`;
  }).join('');

  const badgesHTML = (c.widgets.badges || []).map(k => {
    const b = BADGES[k];
    if (!b) return '';
    return `<span class="badge-pill" style="color:${b.color};border-color:${b.color}55;background:${b.color}18" title="${esc(b.name)}">${b.glyph}</span>`;
  }).join('');

  const extraFieldsHTML = [
    c.identity.locationShow && c.identity.location ? `<div class="meta-chip">📍 ${esc(c.identity.location)}</div>` : '',
    c.identity.ageShow && c.identity.age ? `<div class="meta-chip">${esc(c.identity.age)} yrs</div>` : '',
    c.identity.joinedShow && c.identity.joined ? `<div class="meta-chip">${esc(c.identity.joined)}</div>` : ''
  ].filter(Boolean).join('');

  const statusColors = { online: '#7fd8a6', idle: '#f6c343', dnd: '#f65b5b', offline: '#6a6d80' };
  const usernameClass = [
    {
      gradient: 'name-gradient',
      glow: 'name-glow',
      rainbow: 'name-rainbow',
      shake: 'name-shake'
    }[c.theme.usernameEffect] || '',
    glowUsername ? 'name-has-glow' : '',
    c.effects.animatedTitle ? 'name-animated' : ''
  ].filter(Boolean).join(' ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(c.meta.title || c.identity.display || c.identity.handle)} — profile</title>
<meta name="description" content="${esc(c.meta.description || c.identity.bio)}">
${c.meta.ogImage ? `<meta property="og:image" content="${esc(c.meta.ogImage)}">` : ''}
${c.meta.favicon ? `<link rel="icon" href="${esc(c.meta.favicon)}">` : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${fp.href}" rel="stylesheet">
<style>
:root {
  --void:${bgColor}; --panel:${panelCss}; --panel-solid:#131420;
  --border:rgba(255,255,255,0.08); --border-hi:${borderHiCss};
  --accent1:${c.theme.accent1}; --accent2:${c.theme.accent2};
  --text:${textColor}; --text-dim:#8a8ea3; --text-faint:#4b4e63; --success:#7fd8a6;
  --icon-color:${iconColor};
  --box-bg:${swapBoxColors ? `${c.theme.accent1}14` : 'rgba(255,255,255,.03)'};
  --radius:${c.theme.radius}px; --card-w:${c.theme.cardWidth}px; --glow:${glowStrength.toFixed(2)};
  --font-display:${fp.display}; --font-body:${fp.body}; --font-mono:${fp.mono};
}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{background:var(--void);color:var(--text);font-family:var(--font-body);overflow-x:hidden;height:100%;${c.effects.cursor?'cursor:none;':''}}
@media (prefers-reduced-motion: reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;}}
::selection{background:var(--accent1);color:var(--void);}
a{color:inherit;text-decoration:none;}
#bg-canvas{position:fixed;inset:0;z-index:0;}
.bg-grid{position:fixed;inset:0;z-index:0;background-color:var(--void);background-image:linear-gradient(${c.theme.accent1}22 1px,transparent 1px),linear-gradient(90deg,${c.theme.accent1}22 1px,transparent 1px);background-size:42px 42px;animation:gridmove 14s linear infinite;}
@keyframes gridmove{to{background-position:42px 42px,42px 42px;}}
.bg-plasma{position:fixed;inset:0;z-index:0;background:var(--void);overflow:hidden;}
.bg-plasma span{position:absolute;width:60vw;height:60vw;border-radius:50%;filter:blur(90px);opacity:.38;}
.bg-plasma span:nth-child(1){background:var(--accent1);top:-10%;left:-10%;animation:plasma1 16s ease-in-out infinite;}
.bg-plasma span:nth-child(2){background:var(--accent2);bottom:-15%;right:-10%;animation:plasma2 18s ease-in-out infinite;}
@keyframes plasma1{0%,100%{transform:translate(0,0);}50%{transform:translate(15vw,10vh);}}
@keyframes plasma2{0%,100%{transform:translate(0,0);}50%{transform:translate(-12vw,-8vh);}}
.bg-aurora{position:fixed;inset:0;z-index:0;background:var(--void);overflow:hidden;filter:blur(20px);}
.bg-aurora span{position:absolute;width:140%;height:32%;left:-20%;border-radius:50%;opacity:.32;}
.bg-aurora span:nth-child(1){background:var(--accent1);top:-6%;animation:auro1 12s ease-in-out infinite;}
.bg-aurora span:nth-child(2){background:var(--accent2);top:18%;animation:auro2 15s ease-in-out infinite;}
.bg-aurora span:nth-child(3){background:var(--accent1);top:4%;animation:auro1 9s ease-in-out infinite reverse;opacity:.18;}
@keyframes auro1{0%,100%{transform:translateX(0) scaleY(1);}50%{transform:translateX(8%) scaleY(1.3);}}
@keyframes auro2{0%,100%{transform:translateX(0) scaleY(1);}50%{transform:translateX(-10%) scaleY(.8);}}
.bg-dither{position:fixed;inset:0;z-index:0;background:var(--void);background-image:radial-gradient(${c.theme.accent1}33 1px,transparent 1px);background-size:5px 5px;animation:dithermove 3.5s steps(4) infinite;}
@keyframes dithermove{0%{background-position:0 0;}100%{background-position:5px 5px;}}
.bg-image{position:fixed;inset:0;z-index:0;background-image:url('${esc(c.background.mediaUrl||'')}');background-size:cover;background-position:center;}
.bg-video{position:fixed;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;}
.bg-flat{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,${c.theme.accent1}18,transparent 60%),var(--void);}
.bg-dim{position:fixed;inset:0;z-index:1;background:#000;opacity:${((c.background.dim||0)/100).toFixed(2)};pointer-events:none;}
.grain{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.035;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
#cursor-dot,#cursor-ring{position:fixed;top:0;left:0;pointer-events:none;z-index:999;border-radius:50%;transform:translate(-50%,-50%);}
#cursor-dot{width:5px;height:5px;background:var(--accent2);box-shadow:0 0 10px var(--accent2);}
#cursor-ring{width:30px;height:30px;border:1px solid var(--border-hi);transition:width .18s,height .18s,border-color .18s,background .18s;}
#cursor-ring.hover{width:54px;height:54px;border-color:var(--accent1);background:${c.theme.accent1}18;}
#cursor-img{position:fixed;top:0;left:0;pointer-events:none;z-index:999;transform:translate(-50%,-50%);width:32px;height:32px;object-fit:contain;filter:drop-shadow(0 2px 6px rgba(0,0,0,.5));}
#entrance{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--void);transition:opacity .9s,visibility .9s;text-align:center;padding:20px;}
#entrance.hidden{opacity:0;visibility:hidden;pointer-events:none;}
.entrance-eyebrow{font-family:var(--font-mono);font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:var(--text-faint);margin-bottom:22px;opacity:0;animation:fadeUp .8s ease .2s forwards;}
.entrance-name{font-family:var(--font-display);font-weight:700;font-size:clamp(38px,9vw,84px);letter-spacing:-0.02em;line-height:1;background:linear-gradient(120deg,#fff 20%,var(--accent1) 55%,var(--accent2) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;opacity:0;animation:fadeUp .9s ease .35s forwards;}
.entrance-sub{margin-top:16px;font-size:13px;color:var(--text-dim);opacity:0;animation:fadeUp .9s ease .5s forwards;}
#enter-btn{margin-top:56px;font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:16px 38px;background:transparent;color:var(--text);border:1px solid var(--border-hi);border-radius:999px;cursor:${c.effects.cursor?'none':'pointer'};position:relative;overflow:hidden;opacity:0;animation:fadeUp .9s ease .7s forwards;}
#enter-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,var(--accent1),var(--accent2));opacity:0;transition:opacity .35s;}
#enter-btn span{position:relative;z-index:1;transition:color .35s;}
#enter-btn:hover::before{opacity:1;} #enter-btn:hover span{color:var(--void);} #enter-btn:hover{border-color:transparent;}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}
#app{position:relative;z-index:5;min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;padding:50px 20px;opacity:0;transform:translateY(18px) scale(.985);transition:opacity 1s,transform 1s;}
#app.show{opacity:1;transform:translateY(0) scale(1);}
.card{width:100%;max-width:var(--card-w);background:rgba(19,20,32,${glassAlpha.toFixed(2)});background-image:${c.theme.cardGradient!==false?`linear-gradient(160deg,color-mix(in srgb,var(--accent1) 16%,transparent),transparent 45%,color-mix(in srgb,var(--accent2) 10%,transparent)),radial-gradient(ellipse 80% 50% at 50% 0%,color-mix(in srgb,var(--accent1) 20%,transparent),transparent 70%)`:'none'};border:1px solid rgba(255,255,255,0.09);border-radius:var(--radius);backdrop-filter:blur(${cardBlur}px) saturate(160%);-webkit-backdrop-filter:blur(${cardBlur}px) saturate(160%);padding:36px 30px 26px;box-shadow:0 32px 90px -30px rgba(0,0,0,0.9),0 0 0 1px rgba(255,255,255,0.04),0 0 calc(70px * var(--glow)) -10px color-mix(in srgb,var(--accent1) 50%,transparent);position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(145deg,color-mix(in srgb,var(--accent1) 45%,transparent),transparent 40%,color-mix(in srgb,var(--accent2) 30%,transparent));-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;opacity:0.65;}
.banner{position:absolute;top:0;left:0;right:0;height:96px;border-radius:var(--radius) var(--radius) 0 0;overflow:hidden;${bannerBg}}
.avatar-wrap{position:relative;width:92px;height:92px;margin:20px auto 0;border-radius:${avatarShapeRadius};cursor:${c.effects.cursor?'none':'pointer'};}
.avatar-ring{position:absolute;inset:-4px;border-radius:${avatarShapeRadius};background:conic-gradient(from 0deg,var(--accent1),var(--accent2),var(--accent1));animation:spin 6s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
.avatar{position:absolute;inset:3px;border-radius:${avatarShapeRadius};background:linear-gradient(145deg,#232438,#131420);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:700;font-size:30px;color:var(--text);overflow:hidden;z-index:1;transition:transform .3s cubic-bezier(.34,1.8,.64,1);}
.avatar-wrap.pulse .avatar{transform:scale(1.12);}
.avatar-decoration{position:absolute;top:50%;left:50%;width:132%;height:132%;transform:translate(-50%,-50%);pointer-events:none;z-index:3;object-fit:contain;}
.status-dot{position:absolute;bottom:2px;right:2px;z-index:2;width:16px;height:16px;border-radius:50%;background:var(--success);border:3px solid var(--panel-solid);box-shadow:0 0 10px rgba(127,216,166,.7);}
.identity{text-align:center;margin-top:16px;}
.name-row{display:flex;align-items:center;justify-content:center;gap:7px;flex-wrap:wrap;}
.display-name{font-family:var(--font-display);font-weight:600;font-size:22px;letter-spacing:-0.01em;}
.name-gradient{background:linear-gradient(90deg,var(--accent1),var(--accent2),var(--accent1));background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gradShift 4s linear infinite;}
@keyframes gradShift{to{background-position:200% center;}}
.name-glow{animation:nameGlow 2s ease-in-out infinite;}
@keyframes nameGlow{0%,100%{text-shadow:0 0 8px var(--accent1);}50%{text-shadow:0 0 22px var(--accent1),0 0 8px var(--accent2);}}
.name-rainbow{animation:rainbow 4s linear infinite;}
@keyframes rainbow{0%{color:#ff6b6b;}20%{color:#f6c343;}40%{color:#7fd8a6;}60%{color:#7fb8f6;}80%{color:#c78bf6;}100%{color:#ff6b6b;}}
.name-shake{display:inline-block;animation:shake 3s ease-in-out infinite;}
.name-has-glow{text-shadow:0 0 calc(14px * var(--glow)) var(--accent1), 0 0 calc(28px * var(--glow)) ${c.theme.accent1}88;}
.name-animated{animation:nameGlow 2.4s ease-in-out infinite alternate, gradShift 6s linear infinite;}
@keyframes shake{0%,92%,100%{transform:translateX(0);}93%{transform:translateX(-2px);}95%{transform:translateX(2px);}97%{transform:translateX(-1px);}}
.badge-pill{width:20px;height:20px;border-radius:50%;border:1px solid;display:inline-flex;align-items:center;justify-content:center;font-size:11px;${glowBadges?`box-shadow:0 0 10px -2px currentColor;`:''}}
.handle{margin-top:3px;font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);}
.meta-row{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:9px;}
.meta-chip{font-family:var(--font-mono);font-size:10.5px;color:var(--text-dim);background:rgba(255,255,255,.04);border:1px solid var(--border);padding:4px 9px;border-radius:99px;}
.tagline{margin-top:16px;text-align:center;font-size:14px;color:var(--text-dim);min-height:20px;font-family:var(--font-mono);}
.cursor-blink{display:inline-block;width:1px;height:13px;background:var(--accent2);margin-left:2px;vertical-align:middle;animation:blink 1s steps(1) infinite;}
@keyframes blink{50%{opacity:0;}}
.bio{margin-top:16px;text-align:center;font-size:13.5px;line-height:1.65;color:#b7bad0;padding:0 6px;}
.stats{display:flex;justify-content:center;gap:26px;margin-top:22px;padding:15px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
.stat{text-align:center;} .stat b{display:block;font-family:var(--font-display);font-size:17px;font-weight:600;}
.stat span{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);font-family:var(--font-mono);}
.widget{margin-top:16px;background:var(--box-bg);border:1px solid var(--border);border-radius:12px;padding:11px 12px;}
.now-playing{display:flex;align-items:center;gap:11px;}
.np-art{width:36px;height:36px;border-radius:8px;flex-shrink:0;background:linear-gradient(145deg,var(--accent1),#2a2550);display:flex;align-items:center;justify-content:center;cursor:${c.effects.cursor?'none':'pointer'};}
.np-info{flex:1;min-width:0;} .np-title{font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.np-artist{font-size:11px;color:var(--text-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;}
.eq{display:flex;align-items:flex-end;gap:3px;height:15px;flex-shrink:0;}
.eq span{width:3px;background:var(--accent2);border-radius:2px;animation:eq .9s ease-in-out infinite;animation-play-state:paused;}
.eq.playing span{animation-play-state:running;}
.eq span:nth-child(1){animation-delay:-0.6s;} .eq span:nth-child(2){animation-delay:-0.3s;} .eq span:nth-child(3){animation-delay:-0.9s;} .eq span:nth-child(4){animation-delay:-0.15s;}
@keyframes eq{0%,100%{height:3px;}50%{height:15px;}}
.np-progress{height:3px;background:rgba(255,255,255,.08);border-radius:2px;margin-top:9px;overflow:hidden;cursor:${c.effects.cursor?'none':'pointer'};}
.np-progress-fill{height:100%;width:0%;background:linear-gradient(90deg,var(--accent1),var(--accent2));}
.np-controls{display:flex;align-items:center;gap:8px;margin-top:8px;}
.np-btn{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.06);border:none;color:var(--text);display:flex;align-items:center;justify-content:center;cursor:${c.effects.cursor?'none':'pointer'};}
.np-btn svg{width:11px;height:11px;}
.np-volume{-webkit-appearance:none;appearance:none;width:60px;height:3px;border-radius:2px;background:rgba(255,255,255,.15);margin-left:6px;accent-color:var(--accent1);cursor:${c.effects.cursor?'none':'pointer'};}
.discord-widget{display:flex;align-items:center;gap:10px;}
.dc-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(145deg,var(--accent1),#2a2550);flex-shrink:0;position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:13px;font-weight:700;}
.dc-status{position:absolute;bottom:-1px;right:-1px;width:10px;height:10px;border-radius:50%;border:2px solid var(--panel-solid);}
.dc-info{flex:1;min-width:0;} .dc-name{font-size:12.5px;font-weight:600;} .dc-activity{font-size:11px;color:var(--text-faint);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.dc-join{font-family:var(--font-mono);font-size:10px;padding:6px 10px;border-radius:7px;background:${c.theme.accent1}22;color:var(--accent1);white-space:nowrap;}
.countdown-widget{text-align:center;}
.countdown-label{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);margin-bottom:6px;}
.countdown-time{font-family:var(--font-display);font-size:19px;font-weight:600;}
.socials{display:flex;justify-content:center;flex-wrap:wrap;gap:13px;margin-top:20px;}
.social{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--box-bg);border:1px solid var(--border);transition:border-color .25s,background .25s,box-shadow .25s;cursor:${c.effects.cursor?'none':'pointer'};}
.social svg,.social img{width:16px;height:16px;}
.social:hover{border-color:var(--border-hi);background:${c.theme.accent1}1a;${glowSocials?`box-shadow:0 0 calc(18px * var(--glow)) -3px var(--accent1);`:''}}
.footer-row{margin-top:24px;display:flex;align-items:center;justify-content:space-between;font-family:var(--font-mono);font-size:10px;color:var(--text-faint);}
.views{display:flex;align-items:center;gap:6px;}
.live-dot{width:6px;height:6px;border-radius:50%;background:var(--success);box-shadow:0 0 6px var(--success);animation:pulse 1.6s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.35;}}
.footer-actions{display:flex;gap:8px;}
.footer-actions button{background:none;border:none;color:var(--text-faint);cursor:${c.effects.cursor?'none':'pointer'};padding:2px;}
.footer-actions svg{width:13px;height:13px;}
body.layout-stacked .card{text-align:left;} body.layout-stacked .identity,body.layout-stacked .tagline,body.layout-stacked .bio{text-align:left;}
body.layout-stacked .name-row,body.layout-stacked .meta-row{justify-content:flex-start;} body.layout-stacked .avatar-wrap{margin:20px 0 0;}
body.layout-stacked .socials{justify-content:flex-start;}
body.layout-compact .card{padding:24px 22px 18px;} body.layout-compact .avatar-wrap{width:64px;height:64px;} body.layout-compact .banner{height:64px;}
body.layout-compact .bio{display:none;} body.layout-compact .stats{margin-top:16px;padding:11px 0;}
body.layout-minimal .card{background:transparent;border:none;backdrop-filter:none;box-shadow:none;padding:20px 10px;}
body.layout-minimal .banner{display:none;} body.layout-minimal .avatar-wrap{margin-top:0;}
body.layout-terminal .card{border-radius:6px;font-family:var(--font-mono);} body.layout-terminal .display-name{font-family:var(--font-mono);}
body.layout-terminal .banner{display:none;} body.layout-terminal .avatar-wrap{border-radius:6px;} body.layout-terminal .avatar-ring{border-radius:6px;}
body.layout-terminal .avatar{border-radius:4px;}
@media(max-width:460px){.card{padding:32px 20px 22px;} .stats{gap:16px;}}
</style>
</head>
<body class="layout-${c.theme.layout||'default'}">
${bgLayer}
<div class="bg-dim"></div>
<div class="grain"></div>
${c.effects.cursor?(c.effects.cursorImage?`<img id="cursor-img" src="${esc(c.effects.cursorImage)}" alt="">`:'<div id="cursor-dot"></div><div id="cursor-ring"></div>'):''}
${c.effects.entrance?`
<div id="entrance">
  <div class="entrance-eyebrow">// profile</div>
  <div class="entrance-name">${esc(c.effects.entranceTitle||c.identity.display||c.identity.handle)}</div>
  <div class="entrance-sub">${esc(c.effects.entranceSub||'click anywhere to continue')}</div>
  <button id="enter-btn"><span>Enter</span></button>
</div>`:''}
<div id="app" class="${c.effects.entrance?'':'show'}">
  <div class="card">
    <div class="banner"></div>
    <div class="avatar-wrap" id="avatar-wrap">
      <div class="avatar-ring"></div>
      <div class="avatar">${avatarInner}</div>
      ${avatarDecorationHTML}
      <div class="status-dot"></div>
    </div>
    <div class="identity">
      <div class="name-row">
        <span class="display-name ${usernameClass}">${esc(c.identity.display||c.identity.handle)}</span>
        ${badgesHTML}
      </div>
      <div class="handle">@${esc(c.identity.handle)}</div>
      ${extraFieldsHTML?`<div class="meta-row">${extraFieldsHTML}</div>`:''}
    </div>
    <div class="tagline"><span id="tagline-text"></span><span class="cursor-blink"></span></div>
    <p class="bio">${esc(c.identity.bio)}</p>
    <div class="stats">
      ${c.widgets.viewCounter?`<div class="stat"><b id="stat-views">0</b><span>Views</span></div>`:''}
      <div class="stat"><b>${(c.widgets.badges||[]).length}</b><span>Badges</span></div>
      <div class="stat"><b>${(c.socials||[]).length}</b><span>Links</span></div>
    </div>
    ${c.audio&&c.audio.enabled?`
    <div class="widget now-playing-widget">
      <div class="now-playing">
        <div class="np-art" id="np-toggle"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M8 5v14l11-7z"/></svg></div>
        <div class="np-info"><div class="np-title" id="np-title"></div><div class="np-artist" id="np-artist"></div></div>
        <div class="eq" id="np-eq"><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="np-progress" id="np-progress"><div class="np-progress-fill" id="np-progress-fill"></div></div>
      <div class="np-controls">
        <button class="np-btn" id="np-prev"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 6h2v12H6zm3.5 6l10-6v12z" transform="scale(-1,1) translate(-24,0)"/></svg></button>
        <button class="np-btn" id="np-play"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg></button>
        <button class="np-btn" id="np-next"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 6h2v12H6zm3.5 6l10-6v12z"/></svg></button>
        ${c.audio.volumeControl ? `<input type="range" id="np-volume" class="np-volume" min="0" max="100" value="${(c.audio.volume!=null?c.audio.volume:60)}">` : ''}
      </div>
      <audio id="audio-el"></audio>
    </div>`:''}
    ${c.widgets.discord&&c.widgets.discord.enabled?`
    <div class="widget discord-widget">
      <div class="dc-avatar">${esc((c.widgets.discord.username||'?').slice(0,1).toUpperCase())}<span class="dc-status" style="background:${statusColors[c.widgets.discord.status]||statusColors.online}"></span></div>
      <div class="dc-info"><div class="dc-name">${esc(c.widgets.discord.username)}</div><div class="dc-activity">${esc(c.widgets.discord.activity||(c.widgets.discord.status==='offline'?'Offline':'Online'))}</div></div>
      ${c.widgets.discord.inviteUrl?`<a class="dc-join" href="${esc(c.widgets.discord.inviteUrl)}" target="_blank" rel="noopener">Join</a>`:''}
    </div>`:''}
    ${c.widgets.countdown&&c.widgets.countdown.enabled&&c.widgets.countdown.target?`
    <div class="widget countdown-widget">
      <div class="countdown-label">${esc(c.widgets.countdown.label||'countdown')}</div>
      <div class="countdown-time" id="countdown-time">--</div>
    </div>`:''}
    <div class="socials">${socialsHTML}</div>
    <div class="footer-row">
      <div class="views"><span class="live-dot"></span> live</div>
      <div class="footer-actions">
        <button id="copy-link" title="Copy link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg></button>
        <button id="share-link" title="Share"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/></svg></button>
      </div>
      ${c.widgets.clock?`<div id="clock">--:--:--</div>`:`<div></div>`}
    </div>
  </div>
</div>
<script>
(function(){
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CURSOR_ON = ${c.effects.cursor?'true':'false'};
  var BG_STYLE = ${JSON.stringify(c.background.style||'particles')};
  var ACCENT1 = ${JSON.stringify(c.theme.accent1)};
  var TAGLINES = ${safeJson((c.identity.taglines&&c.identity.taglines.length)?c.identity.taglines:['welcome.'])};
  var TRACKS = ${safeJson((c.audio&&c.audio.tracks&&c.audio.tracks.length)?c.audio.tracks:[{title:'Untitled',artist:'Unknown',url:''}])};
  var AUDIO_AUTOPLAY = ${(c.audio&&c.audio.autoplay)?'true':'false'};
  var AUDIO_VOLUME = ${((c.audio&&c.audio.volume)?c.audio.volume/100:0.6).toFixed(2)};
  var REAL_VIEWS = ${realViews};
  var HAS_ENTRANCE = ${c.effects.entrance?'true':'false'};
  var COUNTDOWN_TARGET = ${JSON.stringify((c.widgets.countdown&&c.widgets.countdown.target)||'')};
  var REACTION = ${JSON.stringify(c.effects.reaction||'repel')};
  var PROFILE_HANDLE = ${JSON.stringify((c.identity&&c.identity.handle)||'')};

  // Track social clicks
  document.querySelectorAll('a.social[data-platform]').forEach(function(a){
    a.addEventListener('click', function(){
      try{
        var plat = a.getAttribute('data-platform')||'link';
        if(!PROFILE_HANDLE) return;
        navigator.sendBeacon ? navigator.sendBeacon('/api/click/'+encodeURIComponent(PROFILE_HANDLE), new Blob([JSON.stringify({platform:plat})],{type:'application/json'}))
          : fetch('/api/click/'+encodeURIComponent(PROFILE_HANDLE),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({platform:plat}),keepalive:true});
      }catch(e){}
    });
  });

  if(CURSOR_ON && !REDUCED){
    var dot=document.getElementById('cursor-dot'), ring=document.getElementById('cursor-ring'), img=document.getElementById('cursor-img');
    var mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
    window.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;if(dot){dot.style.left=mx+'px';dot.style.top=my+'px';}if(img){img.style.left=mx+'px';img.style.top=my+'px';}});
    (function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;if(ring){ring.style.left=rx+'px';ring.style.top=ry+'px';}requestAnimationFrame(loop);})();
    document.querySelectorAll('a,button,.avatar-wrap,.np-art,.np-progress').forEach(function(el){
      el.addEventListener('mouseenter',function(){if(ring)ring.classList.add('hover');});
      el.addEventListener('mouseleave',function(){if(ring)ring.classList.remove('hover');});
    });
  }

  function doCopy(){try{navigator.clipboard.writeText(location.href);}catch(e){}}
  function doShare(){if(navigator.share){navigator.share({title:document.title,url:location.href}).catch(function(){});}else{doCopy();}}
  var copyBtn=document.getElementById('copy-link'); if(copyBtn) copyBtn.addEventListener('click',doCopy);
  var shareBtn=document.getElementById('share-link'); if(shareBtn) shareBtn.addEventListener('click',doShare);
  var avatarWrap=document.getElementById('avatar-wrap');
  if(avatarWrap){avatarWrap.addEventListener('click',function(){avatarWrap.classList.add('pulse');setTimeout(function(){avatarWrap.classList.remove('pulse');},350);});}

  // OPTIMIZED PARTICLES
  if(['particles','snow','rain','fireflies'].indexOf(BG_STYLE)!==-1){
    var canvas=document.getElementById('bg-canvas');
    if(canvas){
      var ctx=canvas.getContext('2d'), W, H, particles=[];
      var COUNT = BG_STYLE==='rain' ? 60 : 40; // much lower for performance
      function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;}
      resize(); window.addEventListener('resize',resize);
      function hexToRgb(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(function(c){return c+c;}).join('');var n=parseInt(h,16);return[(n>>16)&255,(n>>8)&255,n&255];}
      var rgb=hexToRgb(ACCENT1);
      for(var i=0;i<COUNT;i++){
        if(BG_STYLE==='snow') particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.3,vy:Math.random()*.5+.2,r:Math.random()*2+1});
        else if(BG_STYLE==='rain') particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:-0.4,vy:Math.random()*5+6,r:1});
        else if(BG_STYLE==='fireflies') particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+1,phase:Math.random()*Math.PI*2});
        else particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.6+.6});
      }
      var pointer={x:-9999,y:-9999};
      window.addEventListener('mousemove',function(e){pointer.x=e.clientX;pointer.y=e.clientY;});
      window.addEventListener('mouseleave',function(){pointer.x=-9999;pointer.y=-9999;});
      var t=0;
      function drawFrame(){
        if(document.hidden){ setTimeout(drawFrame, 250); return; } // pause when tab hidden
        ctx.clearRect(0,0,W,H);
        for(var i=0;i<particles.length;i++){
          var p=particles[i];
          p.x+=p.vx; p.y+=p.vy;
          if(BG_STYLE==='particles' && REACTION!=='none'){
            var dx=p.x-pointer.x, dy=p.y-pointer.y, d=Math.sqrt(dx*dx+dy*dy);
            if(d<110){ var f=(110-d)/110; var sign=REACTION==='attract'?-1:1; p.vx+=sign*(dx/d)*f*0.7; p.vy+=sign*(dy/d)*f*0.7; }
          }
          p.vx*=0.98; p.vy*=0.98;
          if(p.x<-10)p.x=W+10; if(p.x>W+10)p.x=-10;
          if(p.y<-10)p.y=H+10; if(p.y>H+10)p.y=-10;
          ctx.beginPath();
          if(BG_STYLE==='rain'){ ctx.strokeStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',0.3)'; ctx.lineWidth=1; ctx.moveTo(p.x,p.y); ctx.lineTo(p.x+p.vx*2,p.y-12); ctx.stroke(); }
          else if(BG_STYLE==='fireflies'){ var op=0.3+0.45*Math.abs(Math.sin(t*0.02+p.phase)); ctx.shadowBlur=6; ctx.shadowColor='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',1)'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+op+')'; ctx.fill(); ctx.shadowBlur=0; }
          else { ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=BG_STYLE==='snow'?'rgba(255,255,255,0.65)':'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',0.55)'; ctx.fill(); }
        }
        // Lightweight connections (only check a few neighbors)
        if(BG_STYLE==='particles'){
          for(var i=0;i<particles.length;i++){
            for(var j=i+1;j<Math.min(i+6,particles.length);j++){
              var a=particles[i], b=particles[j], dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy);
              if(d<90){ ctx.strokeStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+(0.09*(1-d/90))+')'; ctx.lineWidth=0.5; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
            }
          }
        }
        t++;
        if(!REDUCED) requestAnimationFrame(drawFrame);
      }
      drawFrame();
    }
  }

  var entrance=document.getElementById('entrance'), app=document.getElementById('app');
  function enter(){
    if(entrance) entrance.classList.add('hidden');
    setTimeout(function(){ if(app) app.classList.add('show'); startTagline(); animateViews(); if(AUDIO_AUTOPLAY) playAudio(); }, HAS_ENTRANCE?250:0);
  }
  if(HAS_ENTRANCE){
    var enterBtn=document.getElementById('enter-btn');
    if(enterBtn) enterBtn.addEventListener('click',function(e){e.stopPropagation();enter();});
    if(entrance) entrance.addEventListener('click',enter);
  } else { enter(); }

  var taglineEl=document.getElementById('tagline-text'), li=0, ci=0, deleting=false;
  function startTagline(){ if(taglineEl) typeLoop(); }
  function typeLoop(){
    var full=TAGLINES[li];
    if(!deleting){ ci++; taglineEl.textContent=full.slice(0,ci); if(ci===full.length){ deleting=true; setTimeout(typeLoop,1600); return; } }
    else { ci--; taglineEl.textContent=full.slice(0,ci); if(ci===0){ deleting=false; li=(li+1)%TAGLINES.length; } }
    setTimeout(typeLoop, deleting?28:48);
  }
  function animateViews(){
    var el=document.getElementById('stat-views'); if(!el) return;
    var target=REAL_VIEWS, cur=0, step=Math.max(1,Math.ceil(target/40));
    (function inc(){ cur=Math.min(target,cur+step); el.textContent=cur.toLocaleString(); if(cur<target) requestAnimationFrame(inc); })();
  }
  var clockEl=document.getElementById('clock');
  if(clockEl){ (function tickClock(){ var d=new Date(); clockEl.textContent=d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}); setTimeout(tickClock,1000); })(); }
  var cdEl=document.getElementById('countdown-time');
  if(cdEl && COUNTDOWN_TARGET){
    (function tickCd(){
      var diff=new Date(COUNTDOWN_TARGET).getTime()-Date.now();
      if(diff<=0){ cdEl.textContent='ended'; return; }
      var d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
      cdEl.textContent=d+'d '+h+'h '+m+'m '+s+'s';
      setTimeout(tickCd,1000);
    })();
  }

  // Audio
  var audioEl=document.getElementById('audio-el');
  var npTitle=document.getElementById('np-title'), npArtist=document.getElementById('np-artist');
  var npEq=document.getElementById('np-eq'), npPlayBtn=document.getElementById('np-play'), npToggle=document.getElementById('np-toggle');
  var npProgress=document.getElementById('np-progress'), npFill=document.getElementById('np-progress-fill');
  var npPrev=document.getElementById('np-prev'), npNext=document.getElementById('np-next');
  var npVolume=document.getElementById('np-volume');
  if(npVolume && audioEl){
    npVolume.addEventListener('input', function(){ audioEl.volume = npVolume.value/100; });
  }
  var tIdx=0, isPlaying=false;
  var PLAY_ICON='<path d="M8 5v14l11-7z"/>', PAUSE_ICON='<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>';
  function loadTrack(i, autoplay){
    tIdx=((i%TRACKS.length)+TRACKS.length)%TRACKS.length;
    var tr=TRACKS[tIdx];
    if(npTitle) npTitle.textContent=tr.title||'Untitled';
    if(npArtist) npArtist.textContent=tr.artist||'Unknown';
    if(audioEl){
      if(tr.url && !tr.url.includes('youtube.com') && !tr.url.includes('youtu.be')){ audioEl.src=tr.url; }
      else { audioEl.removeAttribute('src'); }
      audioEl.volume = npVolume ? (npVolume.value/100) : AUDIO_VOLUME;
    }
    if(autoplay) playAudio();
  }
  function playAudio(){
    if(!audioEl||!audioEl.src){ isPlaying=!isPlaying; updatePlayUI(); return; }
    audioEl.play().then(function(){isPlaying=true;updatePlayUI();}).catch(function(){isPlaying=false;updatePlayUI();});
  }
  function pauseAudio(){ if(audioEl) audioEl.pause(); isPlaying=false; updatePlayUI(); }
  function updatePlayUI(){
    var icon=isPlaying?PAUSE_ICON:PLAY_ICON;
    if(npPlayBtn) npPlayBtn.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">'+icon+'</svg>';
    if(npToggle) npToggle.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" stroke="none">'+icon+'</svg>';
    if(npEq) npEq.classList.toggle('playing',isPlaying);
  }
  if(npTitle){
    loadTrack(0,false);
    if(npPlayBtn) npPlayBtn.addEventListener('click',function(){ isPlaying?pauseAudio():playAudio(); });
    if(npToggle) npToggle.addEventListener('click',function(){ isPlaying?pauseAudio():playAudio(); });
    if(npPrev) npPrev.addEventListener('click',function(){ loadTrack(tIdx-1,isPlaying); });
    if(npNext) npNext.addEventListener('click',function(){ loadTrack(tIdx+1,isPlaying); });
    if(npProgress) npProgress.addEventListener('click',function(e){
      if(!audioEl||!audioEl.duration) return;
      var rect=npProgress.getBoundingClientRect(); var pct=(e.clientX-rect.left)/rect.width;
      audioEl.currentTime=pct*audioEl.duration;
    });
    if(audioEl){
      audioEl.addEventListener('timeupdate',function(){ if(audioEl.duration&&npFill) npFill.style.width=(audioEl.currentTime/audioEl.duration*100)+'%'; });
      audioEl.addEventListener('ended',function(){ loadTrack(tIdx+1,true); });
    }
  }
})();
</script>
</body>
</html>`;
}

module.exports = { buildPublicHTML, FONT_PRESETS, PLATFORMS_ICONS: ICONS, BADGES };
