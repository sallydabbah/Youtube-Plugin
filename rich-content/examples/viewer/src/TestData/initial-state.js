/* eslint-disable */
const TestData = {
  onlyText: {
    entityMap: {},
    blocks: [
      {
        key: '5g8yu',
        text: 'Hello text only #hashtag test.com',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  },
  'basic styles': {
    blocks: [
      {
        key: '45ded',
        text: 'H1',
        type: 'header-one',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '8mis',
        text: 'H2',
        type: 'header-two',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '8mif',
        text: 'כותרת H3',
        type: 'header-three',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '61u53',
        text: 'H2 center',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'inline-header-two',
          },
        ],
        entityRanges: [],
        data: {
          textAlignment: 'center',
        },
      },
      {
        key: 'b69na',
        text: 'H2 bold',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'inline-header-two',
          },
          {
            offset: 0,
            length: 7,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2qet3',
        text: 'H2 italic',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'inline-header-two',
          },
          {
            offset: 0,
            length: 9,
            style: 'ITALIC',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '9hjyr',
        text: 'H2 with inline text',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 2,
            style: 'inline-header-two',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '3sg5e',
        text: 'H2 underline right',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 18,
            style: 'inline-header-two',
          },
          {
            offset: 0,
            length: 18,
            style: 'UNDERLINE',
          },
        ],
        entityRanges: [],
        data: {
          textAlignment: 'right',
        },
      },
      {
        key: 'b8b0u',
        text: 'H2 numbered',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 11,
            style: 'inline-header-two',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '9skn5',
        text: 'H2 bullet',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'inline-header-two',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fbp7d',
        text: 'H3 center',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'inline-header-three',
          },
        ],
        entityRanges: [],
        data: {
          textAlignment: 'center',
        },
      },
      {
        key: 'aq7ob',
        text: 'H3 bold',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 7,
            style: 'inline-header-three',
          },
          {
            offset: 0,
            length: 7,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'clcev',
        text: 'H3 italic',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'inline-header-three',
          },
          {
            offset: 0,
            length: 9,
            style: 'ITALIC',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ag9to',
        text: 'H3 underline right',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 18,
            style: 'inline-header-three',
          },
          {
            offset: 0,
            length: 18,
            style: 'UNDERLINE',
          },
        ],
        entityRanges: [],
        data: {
          textAlignment: 'right',
        },
      },
      {
        key: '3mbj4',
        text: 'רשימה סדורה',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 11,
            style: 'inline-header-three',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'bcsbh',
        text: 'רשימה לא סדורה',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 14,
            style: 'inline-header-three',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '2fdkb',
        text: 'טקסט ממורכז',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          textAlignment: 'center',
        },
      },
      {
        key: '6ebba',
        text: 'Text bold',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 9,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '9tadl',
        text: 'Text italic',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 11,
            style: 'ITALIC',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'it2e',
        text: 'Text underline right',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 20,
            style: 'UNDERLINE',
          },
        ],
        entityRanges: [],
        data: {
          textAlignment: 'right',
        },
      },
      {
        key: '8utpq',
        text: 'Text numbered',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f60gq',
        text: 'Text bullet',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '92tkf',
        text: 'new soft line below this list item\n',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cmo3s',
        text: 'new soft line above this list item',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '8vk72',
        text: 'Quote1',
        type: 'blockquote',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '6mlr2',
        text: 'ציטוט',
        type: 'blockquote',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '7c1rt',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'c3m22',
        text: '// TODO: get normal code example\nvar x = 5;\nvar y = 8;\nvar z = Math.min(x,y);',
        type: 'code-block',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          textAlignment: 'left',
        },
      },
      {
        key: '5ej',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  softNewLine: {
    blocks: [
      {
        key: '4rcs3',
        text: "test me!hi, my name is Dor. \nI'm an idiot",
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 8,
            style: 'inline-header-one',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'c926g',
        text: 'one more block \nand this is a normal text',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 14,
            style: 'inline-header-one',
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  lists: {
    blocks: [
      {
        key: 'b1jra',
        text: 'h2test',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 2,
            style: 'inline-header-one',
          },
          {
            offset: 0,
            length: 6,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '9ne2e',
        text: 'h3test',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 2,
            style: 'inline-header-two',
          },
          {
            offset: 0,
            length: 6,
            style: 'ITALIC',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '6gc05',
        text: 'h4test',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 2,
            style: 'inline-header-three',
          },
          {
            offset: 0,
            length: 6,
            style: 'UNDERLINE',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '3ipk5',
        text: '',
        type: 'ordered-list-item',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '3k78h',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '4vk1l',
        text: 'h2\ntest',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 3,
            style: 'inline-header-one',
          },
          {
            offset: 0,
            length: 7,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'f76qt',
        text: 'h3\ntest',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 3,
            style: 'inline-header-two',
          },
          {
            offset: 0,
            length: 7,
            style: 'ITALIC',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: 'dc2cf',
        text: 'h4\ntest',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 3,
            style: 'inline-header-three',
          },
          {
            offset: 0,
            length: 7,
            style: 'UNDERLINE',
          },
        ],
        entityRanges: [],
        data: {},
      },
      {
        key: '4clif',
        text: '',
        type: 'unordered-list-item',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  links: {
    blocks: [
      {
        key: 'foo',
        text:
          'Search was Google’s only unambiguous win, as well as its primary source of revenue, so when Amazon rapidly surpassed Google as the top product search destination, Google’s foundations began to falter. As many noted at the time, the online advertising industry experienced a major shift from search to discovery in the mid-2010s.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 57,
            length: 25,
            key: 0,
          },
          {
            offset: 99,
            length: 24,
            key: 1,
          },
          {
            offset: 204,
            length: 10,
            key: 2,
          },
        ],
        data: {},
      },
    ],
    entityMap: {
      '0': {
        type: 'LINK',
        mutability: 'MUTABLE',
        data: {
          href:
            'http://www.cnbc.com/2017/01/26/googlealphabet-reports-fourth-quarter-2016-earnings-q4.html',
          rel: 'noopener',
          target: '_blank',
          url:
            'http://www.cnbc.com/2017/01/26/googlealphabet-reports-fourth-quarter-2016-earnings-q4.html',
        },
      },
      '1': {
        type: 'LINK',
        mutability: 'MUTABLE',
        data: {
          href:
            'http://www.geekwire.com/2017/amazon-continues-grow-lead-google-starting-point-online-shoppers/',
          rel: 'noopener',
          target: '_blank',
          url:
            'http://www.geekwire.com/2017/amazon-continues-grow-lead-google-starting-point-online-shoppers/',
        },
      },
      '2': {
        type: 'LINK',
        mutability: 'MUTABLE',
        data: {
          href: 'https://techcrunch.com/2016/08/11/google-isnt-safe-from-yahoos-fate/',
          rel: 'noopener',
          target: '_blank',
          url: 'https://techcrunch.com/2016/08/11/google-isnt-safe-from-yahoos-fate/',
        },
      },
    },
  },
  giphy: {
    blocks: [
      {
        key: 'fls2k',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'cksr1',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: 'c8hff',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {
      '0': {
        type: 'wix-draft-plugin-giphy',
        mutability: 'IMMUTABLE',
        data: {
          config: {
            size: 'content',
            alignment: 'center',
          },
          gif: {
            originalUrl: 'https://media0.giphy.com/media/7ZidoKPclnq7e/giphy.gif',
            stillUrl: 'https://media0.giphy.com/media/7ZidoKPclnq7e/giphy_s.gif',
            height: 306,
            width: 250,
          },
        },
      },
    },
  },
  legacyVideo: {
    entityMap: {
      '0': {
        type: 'VIDEO-EMBED',
        mutability: 'IMMUTABLE',
        data: {
          src: 'https://www.youtube.com/watch?v=eqZVIiD6wSg',
          config: { size: 'content' },
        },
      },
    },
    blocks: [
      {
        key: 'ov8f',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
    ],
  },
  video: {
    entityMap: {
      '0': {
        type: 'wix-draft-plugin-video',
        mutability: 'IMMUTABLE',
        data: {
          src: 'https://www.youtube.com/watch?v=eqZVIiD6wSg',
        },
        config: {
          alignment: 'center',
          size: 'content',
          key: 'ov8f',
        },
      },
    },
    blocks: [
      {
        key: 'ov8f',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
    ],
  },
  html: {
    entityMap: {
      '0': {
        type: 'wix-draft-plugin-html',
        mutability: 'IMMUTABLE',
        data: {
          src: 'https://www.youtube.com/embed/owsfdh4gxyc',
          srcType: 'url',
          config: {
            width: 560,
            height: 340,
            safe: true,
          },
        },
      },
    },
    blocks: [
      {
        key: 'ov8f',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
    ],
  },
  divider: {
    entityMap: {
      '0': {
        type: 'wix-draft-plugin-divider',
        mutability: 'IMMUTABLE',
        data: {
          type: 'single',
          config: {
            size: 'small',
            alignment: 'center',
            textWrap: 'nowrap',
            key: 'ov8f',
          },
        },
      },
      '1': {
        type: 'wix-draft-plugin-divider',
        mutability: 'IMMUTABLE',
        data: {
          type: 'dashed',
          config: {
            size: 'medium',
            alignment: 'center',
            textWrap: 'nowrap',
            key: '7poao',
          },
        },
      },
      '2': {
        type: 'wix-draft-plugin-divider',
        mutability: 'IMMUTABLE',
        data: {
          type: 'double',
          config: {
            size: 'large',
            alignment: 'center',
            textWrap: 'nowrap',
            key: '6gci3',
          },
        },
      },
    },
    blocks: [
      {
        key: 'ov8f',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: '7poao',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 1,
          },
        ],
        data: {},
      },
      {
        key: '6gci3',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 2,
          },
        ],
        data: {},
      },
    ],
  },
  soundCloud: {
    blocks: [
      {
        key: 'fls2k',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '842n2',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: 'eku9b',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {
      '0': {
        type: 'wix-draft-plugin-sound-cloud',
        mutability: 'IMMUTABLE',
        data: {
          config: {
            size: 'content',
            alignment: 'center',
          },
          src: 'https://soundcloud.com/jackie-y-los-bourbons/psycho-killer',
          metadata: {
            height: 270,
            author_name: 'Wix.com',
            html:
              '<iframe width="480" height="270" src="https://www.youtube.com/embed/_zuIxexRrtk?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            thumbnail_width: 480,
            type: 'video',
            version: '1.0',
            thumbnail_height: 360,
            provider_url: 'https://www.youtube.com/',
            title: 'How to Build a Wix Website for Your Business | James Veitch',
            thumbnail_url: 'https://i.ytimg.com/vi/_zuIxexRrtk/hqdefault.jpg',
            author_url: 'https://www.youtube.com/user/Wix',
            provider_name: 'YouTube',
            width: 480,
            video_url: 'https://youtu.be/_zuIxexRrtk',
          },
        },
      },
    },
  },
  full: {
    entityMap: {
      '4': {
        type: 'wix-draft-plugin-html',
        mutability: 'IMMUTABLE',
        data: {
          src: 'https://www.youtube.com/embed/owsfdh4gxyc',
          config: {
            width: 200,
            height: 200,
            safe: true,
            isSrc: true,
          },
        },
      },
      '5': {
        type: 'wix-draft-plugin-html',
        mutability: 'IMMUTABLE',
        data: {
          src: 'https://www.youtube.com/embed/owsfdh4gxyc',
          srcType: 'url',
          config: {
            width: 500,
            height: 200,
            safe: true,
          },
        },
      },
      '6': {
        type: 'wix-draft-plugin-divider',
        mutability: 'IMMUTABLE',
        data: {
          type: 'dashed',
          config: {
            size: 'medium',
          },
        },
      },
    },
    blocks: [
      {
        key: '9gm3s',
        text:
          'Spicy jalapeno #bacon ipsum dolor amet kevin shank ground round, andouille tail shoulder venison strip steak biltong pastrami alcatra ribeye. Porchetta doner tail brisket chicken. Shank jerky flank, pastrami frankfurter hamburger burgdoggen filet mignon salami pork chop. Jerky swine short loin picanha porchetta, prosciutto short ribs jowl chuck burgdoggen brisket turkey.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov8f',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 6,
          },
        ],
        data: {},
      },
      {
        key: 'ov8w',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 4,
          },
        ],
        data: {},
      },
      {
        key: 'ov8t',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 5,
          },
        ],
        data: {},
      },
      {
        key: 'e23a8',
        text:
          'Meatball.com rump tri-tip short ribs frankfurter chuck. Salami turkey ham, ball tip shankle chicken pork jerky venison beef ribs pastrami sausage bresaola. Beef ribs pork salami fatback tenderloin cupim, picanha porchetta pancetta hamburger pig pork loin chuck jerky bresaola. T-bone biltong landjaeger ham hock meatball tri-tip pancetta kevin chicken turducken drumstick tenderloin beef ribs tail. Sausage t-bone ham hock, bacon chicken jowl venison turkey bresaola tongue hamburger.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '5g8yu',
        text:
          'Biltong landjaeger andouille, doner prosciutto tri-tip sirloin shank. Ribeye capicola biltong pastrami burgdoggen. Filet mignon kielbasa capicola landjaeger pig hamburger, corned beef meatloaf swine meatball. Frankfurter brisket rump, pork fatback strip steak boudin cupim landjaeger sirloin venison pastrami cow pork chop chuck.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  },
  codeBlock: {
    blocks: [
      {
        key: 'foo',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'envpb',
        text:
          'for (var i=1; i <= 20; i++)\n{ \n    if (i % 15 == 0) \n        console.log("FizzBuzz"); \n    else if (i % 3 == 0) \n        console.log("Fizz"); \n    else if (i % 5 == 0) \n        console.log("Buzz"); \n    else console.log(i);\n}',
        type: 'code-block',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '6b6mt',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  mentions: {
    blocks: [
      {
        key: 'foo',
        text: 'Hi @Vytenis Butkevičius!',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 3,
            length: 20,
            key: 0,
          },
        ],
        data: {},
      },
    ],
    entityMap: {
      0: {
        type: 'mention',
        mutability: 'SEGMENTED',
        data: {
          mention: {
            name: 'Vytenis Butkevičius',
            slug: 'vytenisb',
            id: '2068b184-6832-412f-abd4-31220fecd086',
          },
        },
      },
    },
  },
  map: {
    blocks: [
      {
        key: 'dvtg1',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '54hkp',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: '1ma4t',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {
      '0': {
        type: 'wix-draft-plugin-map',
        mutability: 'IMMUTABLE',
        data: {
          config: {
            size: 'content',
            alignment: 'center',
            width: 740,
            height: 650,
          },
          mapSettings: {
            address: 'Sarnath, Varanasi, Uttar Pradesh, India',
            locationDisplayName: 'Sarnath, Varanasi, Uttar Pradesh, India',
            lat: 25.3761664,
            lng: 83.02271029999997,
            zoom: 18,
            mode: 'satellite',
            isMarkerShown: true,
            isZoomControlShown: true,
            isStreetViewControlShown: true,
            isDraggingAllowed: true,
          },
        },
      },
    },
  },
  fileUpload: {
    blocks: [
      {
        key: 'djpvb',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: '907ro',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: 'ds8pr',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {
      0: {
        type: 'wix-draft-plugin-file-upload',
        mutability: 'IMMUTABLE',
        data: {
          config: {
            alignment: 'center',
            size: 'small',
          },
          name: 'file-sample_150kB.pdf',
          type: 'pdf',
          uRL: 'http://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf',
        },
      },
    },
  },
};

export default TestData;
