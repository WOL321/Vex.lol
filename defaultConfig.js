const DEFAULT_CFG = {
  identity: {
    handle: '',
    display: '',
    avatarText: '?',
    avatarImg: '',
    bannerImg: '',
    bio: 'new here — still setting things up.',
    taglines: ['welcome to my profile.'],
    location: '',
    locationShow: false,
    age: '',
    ageShow: false,
    joined: '',
    joinedShow: true,
    useDiscordAvatar: false,
    discordAvatarUrl: '',
    discordAvatarDecoration: false,
    avatarDecorationImg: ''
  },

  theme: {
    accent1: '#9f7aea',
    accent2: '#f6a56b',
    font: 'cyber',
    radius: 22,
    glass: 62,
    cardBlur: 26,
    glow: 70,
    glowSocials: true,
    glowBadges: true,
    glowUsername: false,
    layout: 'default',
    cardWidth: 440,
    avatarShape: 'circle',
    borderStyle: 'glow',
    cardGradient: true,
    usernameEffect: 'gradient',
    monochromeIcons: true,
    iconColor: '#eceef5',
    textColor: '#eceef5',
    backgroundColor: '#0a0a10',
    swapBoxColors: false
  },

  background: {
    style: 'particles',
    mediaUrl: '',
    blur: 0,
    dim: 18
  },

  effects: {
    entrance: true,
    entranceTitle: '',
    entranceSub: 'click anywhere to continue',
    cursor: true,
    cursorStyle: 'ring',
    cursorImage: '',
    reaction: 'repel',
    animatedTitle: false
  },

  widgets: {
    viewCounter: true,
    clock: false,
    badges: [],
    discord: {
      enabled: false,
      username: '',
      status: 'online',
      activity: '',
      inviteUrl: ''
    },
    countdown: {
      enabled: false,
      label: 'countdown',
      target: ''
    }
  },

  audio: {
    enabled: false,
    autoplay: false,
    volume: 60,
    volumeControl: false,
    tracks: []
  },

  socials: [],

  meta: {
    title: '',
    description: '',
    ogImage: '',
    favicon: ''
  }
};

const PLATFORMS = [
  'twitter','github','discord','instagram','youtube','tiktok',
  'spotify','twitch','telegram','website','email','kick',
  'reddit','steam','roblox','snapchat','linkedin','soundcloud',
  'bluesky','threads','facebook','pinterest','paypal','xbox',
  'psn','minecraft','gitlab','cashapp','venmo',
  'beacons','linktree','namemc','anilist','lastfm','bandcamp','applemusic'
];

module.exports = { DEFAULT_CFG, PLATFORMS };
