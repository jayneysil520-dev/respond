








// 🔒 LOCKED DATA: USER CONFIGURATION
// Please do not overwrite this file with placeholder data in future updates.

// 自定义长图链接 (Updated to China CDN)
export const MY_CUSTOM_LONG_IMAGE = 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/%E7%8B%90%E7%8B%B8%E5%92%8C%E5%85%94%E5%AD%90.png';

// 资源链接 (All updated to China CDN)
export const ASSETS = {
    P1_IMG_1: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%86%92%E9%99%A9%E5%B0%8F%E9%98%9F/%E5%86%92%E9%99%A9%E5%B0%8F%E9%98%9F%E9%95%BF%E5%9B%BE1%E2%80%94%E2%80%94%E8%B0%83%E6%95%B4%E5%AD%97%E4%BD%93%E7%89%88%E6%9C%AC.png',
    P1_IMG_2: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8D%A1%E7%89%87%E7%AC%AC%E4%BA%8C%E9%95%BF%E5%9B%BE%E6%9C%80%E5%90%8E%E4%B8%80%E7%89%88.png',
    P1_IMG_3: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8D%A1%E7%89%87%E7%AC%AC%E5%9B%9B%E9%95%BF%E5%9B%BE.png',
    P1_VID_1: "https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%93%85%E7%AC%94%E7%9A%84%E8%A7%86%E9%A2%91.mp4",
    P1_VID_2: "https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E6%89%8B%E8%87%82%E8%A7%86%E9%A2%91.mp4",
    PROJECT_2_LONG: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%BE%97%E5%8A%9B%E8%9B%8B%E4%BB%94%E9%95%BF%E5%9B%BE1-11.png',
    PROJECT_2_VIDEO: "https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%93%85%E7%AC%94%E7%9A%84%E8%A7%86%E9%A2%91.mp4" 
};

export interface WaveItemConfig {
    url: string;
    x: number;
    y: number;
    width: number;
    rotate?: number;
    zIndex?: number;
    delay?: number;
}

// 自由布局配置 (Fox and Rabbit)
// 🔒 DATA LOCKED: User specified values
export const CUSTOM_FOX_RABBIT_CONFIG: WaveItemConfig[] = [
    {
        url: MY_CUSTOM_LONG_IMAGE,
        x: 375,
        y: 8710,
        width: 750,
        rotate: 0,
        zIndex: 30
    }
];

// 自由布局配置 (Wave Images)
// 🔒 DATA LOCKED: User specified values
export const WAVE_IMAGES_CONFIG: WaveItemConfig[] = [
    { url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/down.png', x: -390, y: 9000, width: 750, rotate: 0, zIndex: 3, delay: 0.1 },
    { url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/midle.png', x: -390, y: 8840, width: 750, rotate: 0, zIndex: 2, delay: 0.2 },
    { url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/up.png', x: -390, y: 8740, width: 750, rotate: 0, zIndex: 1, delay: 0.3 }
];

// Group 1 Cards Data
export const GROUP_1_CARDS_DATA = [
    { id: 1, xOffset: -400, yOffset: 8320, width: 188.52, height: 109.18, rotate: 0, borderRadius: '32px', img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/1.png' },
    { id: 2, xOffset: -201.5, yOffset: 8320, width: 188.52, height: 68.61, rotate: 0, borderRadius: '32px', img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/2.png' },
    { id: 3, xOffset: -3, yOffset: 8320, width: 188.52, height: 90.28, rotate: 0, borderRadius: '32px', img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/3.png' },
    { id: 4, xOffset: 195.52, yOffset: 8320, width: 188.52, height: 109.18, rotate: 0, borderRadius: '32px', img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/4.png' }
];

// New Scattered Images
export const CUSTOM_NEW_IMAGES = [
    { 
        id: 'd1', 
        img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/d1.png', 
        x: 350,      
        y: 9900,    
        w: 220.8,      
        h: 307.2,      
        r: -7.76      
    },
    { 
        id: 'd2', 
        img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/d2.png', 
        x: 515, 
        y: 10120, 
        w: 220.8, 
        h: 307.2, 
        r: 10.12 
    },
    { 
        id: 'd3', 
        img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/d3.png', 
        x: 635, 
        y:9750, 
        w: 220.8, 
        h: 307.2,  
        r: 2.15 
    },
    { 
        id: 'd4', 
        img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E9%95%BF%E5%9B%BE/d4.png', 
        x: 920, 
        y: 9980, 
        w: 220.8, 
        h: 307.2,  
        r: -5.54 
    }
];

// 🇨🇳 CHINA OPTIMIZATION: Replaced standard CDNs with jsDelivr mirror for speed
export const TOOL_ICONS: Record<string, string> = {
    'Figma': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/figma/figma-original.svg',
    'PS': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    'AI': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
    'AE': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
    'Blender': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/blender/blender-original.svg',
    'C4D': 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/1197px-C4D_Logo.png',
    'React': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/react/react-original.svg',
    'ThreeJS': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/threejs/threejs-original.svg', 
    'Jimeng': 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%8D%B3%E6%A2%A6icon.png',
    'Pinterest': 'https://cdn.jsdmirror.com/gh/devicons/devicon/icons/pinterest/pinterest-original.svg',
    'LibLib': 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/liblib.png'
};

// Project Data
export const PROJECTS_DATA = [
  { 
      id: 1, 
      title: '得力欧美市场IP形象设计', 
      label: 'IP IMAGE DESIGN', 
      year: '2025.04', 
      client: 'DELI', 
      color: '#FF7F27', 
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/1-1.png', 
      // 🟢 👇 PASTE YOUR NEW BACKGROUND IMAGE LINK HERE for Project 1's Preview Card
      // This image will be used for the desaturated background inside the large preview card on hover.
      previewBgImg: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/1-1.png', 
      desc: 'Creating a magical land named "Heart Language Forest" for Deli\'s European and American markets.',
      tools: ['Jimeng', 'PS', 'Figma', 'Blender', 'LibLib'],
      previewTextColor: {
        year: '#E6E6E6',
        label: '#E6E6E6',
        title: '#FFFFFF',
        description: '#D9D9D9',
        tools: '#E6E6E6',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      layout: 'gallery', 
      scrollVideoUrl: ASSETS.P1_VID_1,
      scrollVideoUrl2: ASSETS.P1_VID_2,
      sequenceConfig1: {
          baseUrl: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/arm/ezgif-frame-', 
          suffix: '.png',
          digits: 3,       
          frameCount: 56,
          startIndex: 1
      },
      detailImages: [ASSETS.P1_IMG_1, ASSETS.P1_IMG_2, ASSETS.P1_IMG_3],
  },
  { 
      id: 2, 
      title: '蛋仔派对·得力创作大赛视觉设计', 
      label: 'VISUAL DESIGN', 
      year: '2025.02', 
      color: '#FFA500', 
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/2-1.png', 
      desc: '得力在手，蛋仔脑洞全开',
      tools: ['Figma', 'Jimeng', 'PS', 'Blender', 'LibLib'],
      previewTextColor: {
        year: '#404040',
        label: '#404040',
        title: '#000000',
        description: '#404040',
        tools: '#000000',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      layout: 'gallery',
      scrollVideoUrl: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9%E5%BE%97%E5%8A%9B/1%E6%9C%8825%E6%97%A5.mp4',
      // New Config for Project 2 allowing explicit positioning
      project2Config: {
        // Updated: Removed totalHeight and absolute positioning coordinates.
        // Images will now automatically fill the width of the modal (1000px).
        phoneImage: {
            url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E6%89%8B%E6%9C%BA%E5%B1%8F%E5%B9%95.png',
            x: 607, 
            y: 660, 
            width: 280
        },
        cards: [
            { id: 1, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%871.png', y: 0 },
            { id: 2, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%872.png', y: -348 },
            { id: 3, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%873.png', y: -620 },
            { id: 4, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%874.png', y: -1080 },
            { id: 5, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%875.png', y: -1800 },
            { id: 6, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%876-3-10.png', y: -2580 },
            { id: 7, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%877-2.png', y: -3430 },
            { id: 8, url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E5%8D%A1%E7%89%878.png', y: -3770 },
        ],
        // 🟢 NEW: Extra Absolute Content (Images & Videos)
        extraContent: [
            { 
                type: 'image', 
                y: 445, 
                url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E7%A4%BC%E5%8C%85.png',
                width: 245, 
                zIndex: 25,
                x: 380,      
                rotate: 12 
            },
            { 
                type: 'image', 
                y: 400, 
                url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/%E7%A4%BC%E5%8C%851.png',
                width: 125,
                zIndex: 26,
                x: 80,      
                rotate: -2 
            }
        ],
        // 🟢 ⚠️ 视频修复: 已替换为 GitHub Mirror 链接 (请务必上传 '蛋仔派对.mp4' 到仓库根目录)
        videoInteraction: {
            y: 400, 
            videoUrl: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9.mp4'
        }
      },
      detailImages: [], 
  },
  { 
      id: 3, title: '猿辅导运营设计', label: 'VISUAL DESIGN', year: '2022', color: '#4DA6FF', 
      shadowColor: '#4DA6FF',
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E7%8C%BF%E8%BE%85%E5%AF%BC%E5%B0%81%E9%9D%A2.png', 
      desc: 'Cyberpunk aesthetic visual identity system for a futuristic fashion label.',
      tools: ['PS', 'AI', 'C4D'],
      previewTextColor: {
        year: '#404040',
        label: '#404040',
        title: '#000000',
        description: '#404040',
        tools: '#000000',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      layout: 'gallery',
      detailImages: ['https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E7%8C%BF%E7%BC%96%E7%A8%8B/%E7%8C%BF%E7%BC%96%E7%A8%8B%E9%95%BF%E5%9B%BE%E6%9B%B4%E6%96%B03-10.png'],
      detailText: { main: 'Yuan', sub: '运营设计 OPERATION DESIGN', signature: 'Tutor' }
  },
  { 
      id: 4, 
      title: '卫岗形象设计之LoRA炼制', 
      label: 'LOGO / IP DESIGN', 
      year: '2022', 
      color: '#EA2F2F', 
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%8D%AB%E5%B2%97/%E5%B0%81%E9%9D%A2%E5%9B%BE.png', 
      desc: 'Rhythm of city life captured in a rhythmic event discovery application.',
      tools: ['Figma', 'LibLib', 'PS', 'AI'],
      previewTextColor: {
        year: '#404040',
        label: '#404040',
        title: '#000000',
        description: '#404040',
        tools: '#000000',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      layout: 'gallery',
      detailImages: [
          'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%8D%AB%E5%B2%97/%E5%8D%AB%E5%B2%97%E9%95%BF%E5%9B%BE1.png',
          'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%8D%AB%E5%B2%97/%E5%8D%AB%E5%B2%97%E9%95%BF%E5%9B%BE%E6%9C%80%E5%90%8E%E4%B8%80%E7%89%88.png'
      ],
      // 🟢 ⚠️ 视频修复: 已替换为 GitHub Mirror 链接 (请务必上传 '卫岗牛奶.mp4' 到仓库根目录)
      extraContent: [
          {
              type: 'video',
              url: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%8D%AB%E5%B2%97%E7%89%9B%E5%A5%B6.mp4',
              y: 16600, 
              width: 800, 
              scale: 1,
              x: 0 
          }
      ]
  },
  { 
      id: 5, 
      title: '哪吒书立及腰封设计', 
      label: 'IOT INTERFACE', 
      year: '2025', 
      color: '#E0221E', 
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/nezha/%E5%93%AA%E5%90%92%E6%B5%B7%E8%B4%BC%E7%8E%8B.png', 
      desc: 'Smart home interface connecting organic patterns with digital control.',
      tools: ['AI', 'Figma'],
      previewTextColor: {
        year: '#E6E6E6',
        label: '#E6E6E6',
        title: '#FFFFFF',
        description: '#E6E6E6',
        tools: '#000000',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      layout: 'gallery',
      detailImages: [
          'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/nezha/%E5%93%AA%E5%90%92%E6%B5%B7%E8%B4%BC%E7%8E%8B%E9%95%BF.png'
      ]
  },
  { 
      id: 6, 
      title: '个人视频部分', 
      label: 'MOTION ART', 
      year: '2021-2025', 
      color: '#AA88EE', 
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.png', 
      desc: 'Experimental motion graphics exploring the concept of digital minimalism.',
      tools: ['C4D', 'AE', 'Blender'],
      previewTextColor: {
        year: '#000000',
        label: '#999999',
        title: '#000000',
        description: '#444444',
        tools: '#000000',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      // 🟢 UPDATED CONFIG FOR PROJECT 6: Horizontal Scrolling + Flip Cards
      layout: 'horizontal-scroll',
      horizontalData: [
          {
              id: 1,
              img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/2%20(1).png', 
              video: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/daily.MP4',
              title: 'Daily of designer',
              width: 320, 
              height: 569, // Portrait Cover
              flippedWidth: 484, 
              flippedHeight: 682.4, 
              y: 0, // 🟢 Baseline
              scale: 1,
              introConfig: {
                  text: '01\nDAILY OF DESIGNER\n\nA glimpse into\nthe creative process.',
                  // 🟢 MOVED FURTHER LEFT: -250 -> -350
                  x: -210, 
                  y: 100, 
                  rotate: 0,
                  fontSize: '14px',
                  width: '200px',
                  align: 'right'
              }
          },
          {
              id: 2,
              img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/2%20(2).png', 
              video: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/1%E6%9C%889%E6%97%A5.mp4',
              title: 'Tokyo Run',
              width: 320,
              height: 569,
              flippedWidth: 800, 
              flippedHeight: 450,
              y: 120, // 🟢 Lowered
              scale: 1,
              introConfig: {
                  text: '02\nTOKYO RUN\n\nAbstract visual\nlanguage simulation.',
                  // 🟢 MOVED FURTHER LEFT: -200 -> -300
                  x: -200, 
                  y: 200,
                  rotate: -5,
                  fontSize: '16px',
                  width: '180px',
                  align: 'right'
              }
          },
          {
              id: 3,
              img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/2%20(3).png', 
              // 🟢 ⚠️ 视频修复: 已替换为 GitHub Mirror 链接 (请务必上传 '梵高海浪.mp4' 到仓库根目录)
              video: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/redpandacompress_%E6%A2%B5%E9%AB%98%E6%B5%B7%E6%B5%AA.mp4',
              title: 'MoonliGht',
              width: 320,
              height: 569,
              flippedWidth: 800, 
              flippedHeight: 450,
              y: -80, // 🟢 Raised
              scale: 1,
              introConfig: {
                  text: '03\nMOONLIGHT\n\nVan Gogh inspired\nmotion dreams.',
                  // 🟢 MOVED FURTHER LEFT: -220 -> -320
                  x: -190, 
                  y: 150,
                  rotate: 0,
                  fontSize: '14px',
                  width: '180px',
                  align: 'right'
              }
          },
          {
              id: 4,
              img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/2%20(4).png', 
              // 🟢 ⚠️ 视频修复: 已替换为 GitHub Mirror 链接 (请务必上传 '最终版本了啊.mp4' 到仓库根目录)
              video: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E6%9C%80%E7%BB%88%E7%89%88%E6%9C%AC%E4%BA%86%E5%95%8A.mp4',
              title: '2  6k.  m e  r',
              width: 320,
              height: 569,
              flippedWidth: 800, 
              flippedHeight: 450,
              y: 40, // 🟢 Middle
              scale: 1,
              introConfig: {
                  text: '04\n2  6k.  m e  r\n\n我害怕黄昏带走我的清醒 所以疯狂的摇动手电 对抗压来的阴影\n子弹穿过我的腹腔 种植出动人的玫瑰 流血的意义 是为了清晨的诞生.',
                  // 🟢 MOVED FURTHER LEFT: -180 -> -280
                  x: -180, 
                  y: 300,
                  rotate: 5,
                  fontSize: '12px',
                  width: '150px',
                  align: 'right'
              }
          }
      ]
  },
  { 
      id: 7, 
      title: 'aboUt mysElf', 
      label: 'Personal Gallery', 
      year: '2021-2025', 
      color: '#4ECDC4', 
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2026-02-02_223917_470.jpg', 
      desc: 'A collection of personal experiments and visual explorations.', 
      tools: ['Blender', 'PS', 'AI'], 
      previewTextColor: {
        year: '#E6E6E6',
        label: '#E6E6E6',
        title: '#FFFFFF',
        description: '#E6E6E6',
        tools: '#000000',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      layout: 'gallery',
      // 🇨🇳 CHINA OPTIMIZATION: Replaced Unsplash images with available GitHub assets to prevent blocking
      detailImages: [
          'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/2%20(1).png',
          'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/2%20(2).png',
          'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/2%20(3).png'
      ]
  },
  { 
      id: 8, title: '设计能力沉淀', label: 'Personal Growth', year: '2021-2026', color: '#7BC5FF', 
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/Group%20951.png', 
      desc: 'Visualizing sound waves in real-time using WebAudio API and Canvas.',
      tools: ['Figma', 'PS'], // 🟢 Added missing comma
      previewTextColor: {
        year: '#000000',
        label: '#999999',
        title: '#000000',
        description: '#444444',
        tools: '#000000',
        arrow: '#000000',
        cardBorder: 'rgba(0,0,0,0.1)'
      },
      layout: 'gallery',
      detailImages: [
          'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/%E7%BD%91%E9%A1%B5%E9%95%BF%E5%9B%BE.png',
      ]
  }
];
