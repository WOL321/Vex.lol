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
    joinedShow: true
  },

  theme: {
    accent1: '#8b7cf6',
    accent2: '#f6a56b',
    font: 'space-grotesk',
    radius: 20,
    glass: 55,
    glow: 50,
    layout: 'default',
    cardWidth: 420,
    avatarShape: 'circle',
    borderStyle: 'solid',
    cardGradient: true,
    usernameEffect: 'none'
  },

  background: {
    style: 'particles',
    mediaUrl: '',
    blur: 0,
    dim: 0
  },

  effects: {
    entrance: true,
    entranceTitle: '',
    entranceSub: 'click anywhere to continue',
    cursor: false,
    cursorStyle: 'ring',
    reaction: 'none'
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
  'twitter', 'github', 'discord', 'instagram', 'youtube', 'tiktok',
  'spotify', 'twitch', 'telegram', 'website', 'email', 'kick',
  'reddit', 'steam', 'roblox', 'snapchat', 'linkedin', 'soundcloud',
  'bluesky', 'threads', 'facebook', 'pinterest', 'paypal', 'xbox',
  'psn', 'minecraft'
];

module.exports = { DEFAULT_CFG, PLATFORMS };
