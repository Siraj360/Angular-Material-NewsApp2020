
export class TestDataService 
{
    constructor() {}

   public getTestData() {
    return Promise.resolve({testArticles: this.testArticles,
            testSources: this.testSources });
   }

 public testSources : Array<any>= [
    {
      id: 'abc-news',
      name: 'ABC News',
      description:
        'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
      url: 'https://abcnews.go.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description:
        "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au',
    },
    {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English',
      description:
        'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
      url: 'http://www.aljazeera.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'ars-technica',
      name: 'Ars Technica',
      description:
        "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
      url: 'http://arstechnica.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'associated-press',
      name: 'Associated Press',
      description:
        'The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.',
      url: 'https://apnews.com/',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'australian-financial-review',
      name: 'Australian Financial Review',
      description:
        'The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.',
      url: 'http://www.afr.com',
      category: 'business',
      language: 'en',
      country: 'au',
    },
    {
      id: 'axios',
      name: 'Axios',
      description:
        'Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.',
      url: 'https://www.axios.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'bbc-news',
      name: 'BBC News',
      description:
        'Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.',
      url: 'http://www.bbc.co.uk/news',
      category: 'general',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'bbc-sport',
      name: 'BBC Sport',
      description:
        'The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.',
      url: 'http://www.bbc.co.uk/sport',
      category: 'sports',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'bleacher-report',
      name: 'Bleacher Report',
      description:
        'Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!',
      url: 'http://www.bleacherreport.com',
      category: 'sports',
      language: 'en',
      country: 'us',
    },
    {
      id: 'bloomberg',
      name: 'Bloomberg',
      description:
        'Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.',
      url: 'http://www.bloomberg.com',
      category: 'business',
      language: 'en',
      country: 'us',
    },
    {
      id: 'breitbart-news',
      name: 'Breitbart News',
      description:
        'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
      url: 'http://www.breitbart.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'business-insider',
      name: 'Business Insider',
      description:
        'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
      url: 'http://www.businessinsider.com',
      category: 'business',
      language: 'en',
      country: 'us',
    },
    {
      id: 'business-insider-uk',
      name: 'Business Insider (UK)',
      description:
        'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
      url: 'http://uk.businessinsider.com',
      category: 'business',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'buzzfeed',
      name: 'Buzzfeed',
      description:
        'BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.',
      url: 'https://www.buzzfeed.com',
      category: 'entertainment',
      language: 'en',
      country: 'us',
    },
    {
      id: 'cbc-news',
      name: 'CBC News',
      description:
        "CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
      url: 'http://www.cbc.ca/news',
      category: 'general',
      language: 'en',
      country: 'ca',
    },
    {
      id: 'cbs-news',
      name: 'CBS News',
      description:
        'CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.',
      url: 'http://www.cbsnews.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'cnn',
      name: 'CNN',
      description:
        'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN',
      url: 'http://us.cnn.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'crypto-coins-news',
      name: 'Crypto Coins News',
      description:
        'Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.',
      url: 'https://www.ccn.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'engadget',
      name: 'Engadget',
      description:
        'Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.',
      url: 'https://www.engadget.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'entertainment-weekly',
      name: 'Entertainment Weekly',
      description:
        'Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.',
      url: 'http://www.ew.com',
      category: 'entertainment',
      language: 'en',
      country: 'us',
    },
    {
      id: 'espn',
      name: 'ESPN',
      description:
        'ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.',
      url: 'http://espn.go.com',
      category: 'sports',
      language: 'en',
      country: 'us',
    },
    {
      id: 'espn-cric-info',
      name: 'ESPN Cric Info',
      description:
        'ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.',
      url: 'http://www.espncricinfo.com/',
      category: 'sports',
      language: 'en',
      country: 'us',
    },
    {
      id: 'financial-post',
      name: 'Financial Post',
      description:
        'Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.',
      url: 'http://business.financialpost.com',
      category: 'business',
      language: 'en',
      country: 'ca',
    },
    {
      id: 'football-italia',
      name: 'Football Italia',
      description:
        'Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.',
      url: 'http://www.football-italia.net',
      category: 'sports',
      language: 'en',
      country: 'it',
    },
    {
      id: 'fortune',
      name: 'Fortune',
      description: 'Fortune 500 Daily and Breaking Business News',
      url: 'http://fortune.com',
      category: 'business',
      language: 'en',
      country: 'us',
    },
    {
      id: 'four-four-two',
      name: 'FourFourTwo',
      description:
        'The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.',
      url: 'http://www.fourfourtwo.com/news',
      category: 'sports',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'fox-news',
      name: 'Fox News',
      description:
        'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
      url: 'http://www.foxnews.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'fox-sports',
      name: 'Fox Sports',
      description:
        'Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.',
      url: 'http://www.foxsports.com',
      category: 'sports',
      language: 'en',
      country: 'us',
    },
    {
      id: 'google-news',
      name: 'Google News',
      description:
        'Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.',
      url: 'https://news.google.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'google-news-au',
      name: 'Google News (Australia)',
      description:
        'Comprehensive, up-to-date Australia news coverage, aggregated from sources all over the world by Google News.',
      url: 'https://news.google.com',
      category: 'general',
      language: 'en',
      country: 'au',
    },
    {
      id: 'google-news-ca',
      name: 'Google News (Canada)',
      description:
        'Comprehensive, up-to-date Canada news coverage, aggregated from sources all over the world by Google News.',
      url: 'https://news.google.com',
      category: 'general',
      language: 'en',
      country: 'ca',
    },
    {
      id: 'google-news-in',
      name: 'Google News (India)',
      description:
        'Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.',
      url: 'https://news.google.com',
      category: 'general',
      language: 'en',
      country: 'in',
    },
    {
      id: 'google-news-uk',
      name: 'Google News (UK)',
      description:
        'Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.',
      url: 'https://news.google.com',
      category: 'general',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'hacker-news',
      name: 'Hacker News',
      description:
        'Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham\'s investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as "anything that gratifies one\'s intellectual curiosity".',
      url: 'https://news.ycombinator.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'ign',
      name: 'IGN',
      description:
        'IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.',
      url: 'http://www.ign.com',
      category: 'entertainment',
      language: 'en',
      country: 'us',
    },
    {
      id: 'independent',
      name: 'Independent',
      description:
        'National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.',
      url: 'http://www.independent.co.uk',
      category: 'general',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'mashable',
      name: 'Mashable',
      description:
        'Mashable is a global, multi-platform media and entertainment company.',
      url: 'https://mashable.com',
      category: 'entertainment',
      language: 'en',
      country: 'us',
    },
    {
      id: 'medical-news-today',
      name: 'Medical News Today',
      description:
        'Medical news and health news headlines posted throughout the day, every day.',
      url: 'http://www.medicalnewstoday.com',
      category: 'health',
      language: 'en',
      country: 'us',
    },
    {
      id: 'msnbc',
      name: 'MSNBC',
      description:
        'Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.',
      url: 'http://www.msnbc.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'mtv-news',
      name: 'MTV News',
      description:
        "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
      url: 'http://www.mtv.com/news',
      category: 'entertainment',
      language: 'en',
      country: 'us',
    },
    {
      id: 'mtv-news-uk',
      name: 'MTV News (UK)',
      description:
        'All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.',
      url: 'http://www.mtv.co.uk/news',
      category: 'entertainment',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'national-geographic',
      name: 'National Geographic',
      description:
        'Reporting our world daily: original nature and science news from National Geographic.',
      url: 'http://news.nationalgeographic.com',
      category: 'science',
      language: 'en',
      country: 'us',
    },
    {
      id: 'national-review',
      name: 'National Review',
      description:
        'National Review: Conservative News, Opinion, Politics, Policy, & Current Events.',
      url: 'https://www.nationalreview.com/',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'nbc-news',
      name: 'NBC News',
      description:
        'Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.',
      url: 'http://www.nbcnews.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'news24',
      name: 'News24',
      description:
        "South Africa's premier news source, provides breaking news on national, world, Africa, sport, entertainment, technology and more.",
      url: 'http://www.news24.com',
      category: 'general',
      language: 'en',
      country: 'za',
    },
    {
      id: 'new-scientist',
      name: 'New Scientist',
      description:
        'Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.',
      url: 'https://www.newscientist.com/section/news',
      category: 'science',
      language: 'en',
      country: 'us',
    },
    {
      id: 'news-com-au',
      name: 'News.com.au',
      description:
        'We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.',
      url: 'http://www.news.com.au',
      category: 'general',
      language: 'en',
      country: 'au',
    },
    {
      id: 'newsweek',
      name: 'Newsweek',
      description:
        'Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.',
      url: 'https://www.newsweek.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'new-york-magazine',
      name: 'New York Magazine',
      description:
        'NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.',
      url: 'http://nymag.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'next-big-future',
      name: 'Next Big Future',
      description:
        'Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.',
      url: 'https://www.nextbigfuture.com',
      category: 'science',
      language: 'en',
      country: 'us',
    },
    {
      id: 'nfl-news',
      name: 'NFL News',
      description:
        'The official source for NFL news, schedules, stats, scores and more.',
      url: 'http://www.nfl.com/news',
      category: 'sports',
      language: 'en',
      country: 'us',
    },
    {
      id: 'nhl-news',
      name: 'NHL News',
      description:
        'The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.',
      url: 'https://www.nhl.com/news',
      category: 'sports',
      language: 'en',
      country: 'us',
    },
    {
      id: 'politico',
      name: 'Politico',
      description:
        'Political news about Congress, the White House, campaigns, lobbyists and issues.',
      url: 'https://www.politico.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'polygon',
      name: 'Polygon',
      description:
        'Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.',
      url: 'http://www.polygon.com',
      category: 'entertainment',
      language: 'en',
      country: 'us',
    },
    {
      id: 'recode',
      name: 'Recode',
      description:
        'Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.',
      url: 'http://www.recode.net',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'reddit-r-all',
      name: 'Reddit /r/all',
      description:
        "Reddit is an entertainment, social news networking service, and news website. Reddit's registered community members can submit content, such as text posts or direct links.",
      url: 'https://www.reddit.com/r/all',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'reuters',
      name: 'Reuters',
      description:
        'Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.',
      url: 'http://www.reuters.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'rte',
      name: 'RTE',
      description:
        "Get all of the latest breaking local and international news stories as they happen, with up to the minute updates and analysis, from Ireland's National Broadcaster.",
      url: 'https://www.rte.ie/news',
      category: 'general',
      language: 'en',
      country: 'ie',
    },
    {
      id: 'talksport',
      name: 'TalkSport',
      description:
        "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
      url: 'http://talksport.com',
      category: 'sports',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'techcrunch',
      name: 'TechCrunch',
      description:
        'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
      url: 'https://techcrunch.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'techradar',
      name: 'TechRadar',
      description:
        'The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.',
      url: 'http://www.techradar.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-american-conservative',
      name: 'The American Conservative',
      description:
        'Realism and reform. A new voice for a new generation of conservatives.',
      url: 'http://www.theamericanconservative.com/',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-globe-and-mail',
      name: 'The Globe And Mail',
      description:
        'The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.',
      url: 'https://www.theglobeandmail.com',
      category: 'general',
      language: 'en',
      country: 'ca',
    },
    {
      id: 'the-hill',
      name: 'The Hill',
      description:
        'The Hill is a top US political website, read by the White House and more lawmakers than any other site -- vital for policy, politics and election campaigns.',
      url: 'http://thehill.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-hindu',
      name: 'The Hindu',
      description:
        "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
      url: 'http://www.thehindu.com',
      category: 'general',
      language: 'en',
      country: 'in',
    },
    {
      id: 'the-huffington-post',
      name: 'The Huffington Post',
      description:
        'The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.',
      url: 'http://www.huffingtonpost.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-irish-times',
      name: 'The Irish Times',
      description:
        'The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.',
      url: 'https://www.irishtimes.com',
      category: 'general',
      language: 'en',
      country: 'ie',
    },
    {
      id: 'the-jerusalem-post',
      name: 'The Jerusalem Post',
      description:
        'The Jerusalem Post is the leading online newspaper for English speaking Jewry since 1932, bringing news and updates from the Middle East and all over the Jewish world.',
      url: 'https://www.jpost.com/',
      category: 'general',
      language: 'en',
      country: 'is',
    },
    {
      id: 'the-lad-bible',
      name: 'The Lad Bible',
      description:
        'The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!',
      url: 'https://www.theladbible.com',
      category: 'entertainment',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'the-next-web',
      name: 'The Next Web',
      description:
        'The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.',
      url: 'http://thenextweb.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-sport-bible',
      name: 'The Sport Bible',
      description:
        'TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!',
      url: 'https://www.thesportbible.com',
      category: 'sports',
      language: 'en',
      country: 'gb',
    },
    {
      id: 'the-times-of-india',
      name: 'The Times of India',
      description:
        'Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.',
      url: 'http://timesofindia.indiatimes.com',
      category: 'general',
      language: 'en',
      country: 'in',
    },
    {
      id: 'the-verge',
      name: 'The Verge',
      description:
        'The Verge covers the intersection of technology, science, art, and culture.',
      url: 'http://www.theverge.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-wall-street-journal',
      name: 'The Wall Street Journal',
      description:
        'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.',
      url: 'http://www.wsj.com',
      category: 'business',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-washington-post',
      name: 'The Washington Post',
      description:
        'Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.',
      url: 'https://www.washingtonpost.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'the-washington-times',
      name: 'The Washington Times',
      description:
        'The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.',
      url: 'https://www.washingtontimes.com/',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'time',
      name: 'Time',
      description:
        'Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.',
      url: 'http://time.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'usa-today',
      name: 'USA Today',
      description:
        'Get the latest national, international, and political news at USATODAY.com.',
      url: 'http://www.usatoday.com/news',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'vice-news',
      name: 'Vice News',
      description:
        'Vice News is Vice Media, Inc.\'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of "under - reported stories".',
      url: 'https://news.vice.com',
      category: 'general',
      language: 'en',
      country: 'us',
    },
    {
      id: 'wired',
      name: 'Wired',
      description:
        'Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.',
      url: 'https://www.wired.com',
      category: 'technology',
      language: 'en',
      country: 'us',
    },
  ];
;

public testArticles : Array<any> = 
[
 {
source: {
id: "abc-news",
name: "ABC News"
},
author: "SCOTT SMITH Associated Press",
title: "Iranian ships approach Venezuela with no sign of US threat",
description: "",
url: "https://abcnews.go.com/International/wireStory/iranian-ships-approach-venezuela-sign-us-threat-70853937",
urlToImage: "https://s.abcnews.com/images/International/WireAP_39d0732bfedd44dd933a10c064ba2596_16x9_992.jpg",
publishedAt: "2020-05-24T00:14:00Z",
content: "CARACAS, Venezuela -- The first of five tankers loaded with gasoline sent from Iran approached Venezuelan waters late Saturday, expected to temporarily ease the South American nations fuel crunch w… [+4966 chars]"
},
{
source: {
id: "abc-news",
name: "ABC News"
},
author: "The Associated Press",
title: "Former NFL quarterback Ryan Leaf arrested in California",
description: "",
url: "https://abcnews.go.com/Sports/wireStory/nfl-quarterback-ryan-leaf-arrested-california-70853393",
urlToImage: "https://s.abcnews.com/images/Sports/WireAP_38f2b5e4448c4b75aa62510a02d38667_16x9_992.jpg",
publishedAt: "2020-05-23T21:14:00Z",
content: "PALM DESERT, Calif. -- Former NFL quarterback Ryan Leaf was arrested in Southern California on Friday. Leaf, 44, was arrested on a domestic battery charge in Palm Desert, which is about 110 miles … [+955 chars]"
},
{
source: {
id: "abc-news",
name: "ABC News"
},
author: "GEIR MOULSON, YURI KAGEYAMA and ANGELA CHARLTON Associated Press",
title: "Zero cases in China as virus surges in Latin America, India",
description: "",
url: "https://abcnews.go.com/Health/wireStory/virus-cases-drop-china-surge-latin-america-70846485",
urlToImage: "https://s.abcnews.com/images/Health/WireAP_7c7a310fd54a4650b9eba9baaf0f4c8a_16x9_992.jpg",
publishedAt: "2020-05-23T13:25:48Z",
content: "BERLIN -- New coronavirus cases in China fell to zero on Saturday for the first time but surged in India and overwhelmed hospitals across Latin America both in countries lax about lockdowns and tho… [+5968 chars]"
},
{
source: {
id: "abc-news",
name: "ABC News"
},
author: "Brittany Borer",
title: "Severe weather kills 2 in Carolinas, tornado threat possible in Midwest Saturday",
description: "",
url: "https://abcnews.go.com/US/severe-weather-kills-carolinas-tornado-threat-midwest-saturday/story?id=70845707",
urlToImage: "https://s.abcnews.com/images/US/Pennsylvania_Weather_200523_hpMain_20200523-062018_16x9_992.jpg",
publishedAt: "2020-05-23T10:50:50Z",
content: "Severe storms moved across the southern Plains to the Southeast on Friday, leaving a variety of storm damage in their wake, including two deaths in the Carolinas. The storms produced four tornadoes a… [+1937 chars]"
},
{
source: {
id: "abc-news",
name: "ABC News"
},
author: "The Associated Press",
title: "Restrictions eased while virus deaths decline in New York",
description: "",
url: "https://abcnews.go.com/US/wireStory/weekend-cuomo-lifts-ban-groups-nyc-beaches-open-70847507",
urlToImage: "https://s.abcnews.com/images/US/WireAP_beebbf6840604ad5bb759d33157c6e67_16x9_992.jpg",
publishedAt: "2020-05-23T18:14:10Z",
content: "NEW YORK -- New Yorkers experiencing cabin fever after two months of coronavirus quarantine received an unexpected reprieve when Gov. Andrew Cuomo eased the state's ban on gatherings in time for th… [+4261 chars]"
},

{
source: {
id: "abc-news",
name: "ABC News"
},
author: "DARLENE SUPERVILLE Associated Press",
title: "Trump to attend Wednesday's NASA astronaut launch in Florida",
description: "",
url: "https://abcnews.go.com/Technology/wireStory/trump-attend-wednesdays-nasa-astronaut-launch-florida-70850790",
urlToImage: "https://s.abcnews.com/images/Technology/WireAP_8245d6231b274cc8ae2c03272015c22b_16x9_992.jpg",
publishedAt: "2020-05-23T16:04:41Z",
content: "STERLING, Va. -- President Donald Trump plans to be on the Florida coast Wednesday to watch American astronauts blast into orbit from the Kennedy Space Center for the first time in more than a deca… [+1525 chars]"
},

  {source: {
id: "cnn",
name: "CNN"
},
author: "Brian Stelter",
title: "New York Times publishes the names of 1,000 people who died from Covid-19",
description: "The most important word on the front page of Sunday's New York Times is incalculable",
url: "http://us.cnn.com/2020/05/23/media/new-york-times-front-page-coronavirus/index.html",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200523212658-nyt-front-page-0524-super-tease.jpg",
publishedAt: "2020-05-24T02:49:43Z",
content: null
},
{
source: {
id: "cnn",
name: "CNN"
},
author: null,
title: "Brazil's Covid-19 death toll climbs as its President downplays severity - CNN Video",
description: "CNN's Nick Paton Walsh takes us inside of an ICU in Sao Paulo, Brazil, where medical personnel are struggling to meet the needs of those infected with coronavirus.",
url: "http://us.cnn.com/videos/world/2020/05/21/brazil-sao-paulo-icu-covid-19-walsh-pkg-ebof-vpx.cnn",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200521203553-drone-shot-mass-grave-brazil-super-tease.jpg",
publishedAt: "2020-05-24T02:07:21.149612Z",
content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
},
{
source: {
id: "cnn",
name: "CNN"
},
author: null,
title: "President Trump seen doing same thing he criticized President Obama for during Ebola outbreak - CNN Video",
description: "As coronavirus cases in the US continue to rise, President Donald Trump was seen golfing at the Trump National Golf Club in Sterling, Virginia. This is the first time he has been seen on a golf course since the pandemic began. In 2014, Trump criticized former…",
url: "http://us.cnn.com/videos/politics/2020/05/23/donald-trump-golf-coronavirus-obama-ebola-sot-vpx-nr.cnn",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200218143745-obama-trump-split-super-tease.jpg",
publishedAt: "2020-05-24T00:22:22.4483081Z",
content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
},
{
source: {
id: "cnn",
name: "CNN"
},
author: null,
title: "Tensions rise in US over face mask rules - CNN Video",
description: "Some places in the US are seeing violent confrontations with people being asked to wear face masks in accordance to local rules. CNN's Brian Todd reports.",
url: "http://us.cnn.com/videos/us/2020/05/22/violent-confrontations-mask-rules-todd-tsr-pkg-vpx.cnn",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200403154706-us-coronavirus-face-mask-0331-super-tease.jpg",
publishedAt: "2020-05-24T00:22:21.5110418Z",
content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
},
{
source: {
id: "cnn",
name: "CNN"
},
author: "Shasta Darlington, Jose Brito, and Flora Charner, CNN",
title: "Report: Brazil's indigenous people are dying at an alarming rate from Covid-19",
description: "Far from hospitals and often lacking basic infrastructure, Brazil's indigenous people are dying at an alarming rate from Covid-19 with little help in sight.",
url: "http://us.cnn.com/2020/05/23/world/coronavirus-indigenous-death-apib-intl/index.html",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200521202833-satere-mawe-indigenous-men-navigate-the-ariau-river-during-the-covid-19-novel-coronavirus-pandemic-at-the-sahu-ape-community-80-km-of-manaus-amazonas-state-brazil-on-may-5-2020-super-tease.jpg",
publishedAt: "2020-05-24T00:15:33Z",
content: null
},
{
source: {
id: "cnn",
name: "CNN"
},
author: "Melissa Alonso and Nicole Chavez, CNN",
title: "A cluster of coronavirus cases was reported in Arkansas after a swim party",
description: "Several people who attended a high school swim party in Arkansas have contracted Covid-19, Gov. Asa Hutchinson said.",
url: "http://us.cnn.com/2020/05/23/us/arkansas-swim-party-coronavirus/index.html",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200523185737-asa-hutchinson-0523-super-tease.jpg",
publishedAt: "2020-05-24T00:15:31Z",
content: null
},
{
source: {
id: "cnn",
name: "CNN"
},
author: null,
title: "Reporter to Trump press secretary: I'm dying to go back to church - CNN Video",
description: "A White House reporter fired back at White House Press Secretary Kayleigh McEnany during questioning about President Trump saying he will 'override' governors who do not allow churches and places of worship to remain open.",
url: "http://us.cnn.com/videos/us/2020/05/22/kayleigh-mcenany-vs-reporter-on-church-reopening-vpx.cnn",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200522155328-jeff-mason-kayleigh-mcenany-split-super-tease.jpg",
publishedAt: "2020-05-23T23:52:25.6014664Z",
content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
},
{
source: {
id: "cnn",
name: "CNN"
},
author: "Nick Paton Walsh, Jo Shelley, Eduardo Duwe and William Bonnett, CNN",
title: "Bolsonaro calls coronavirus a 'little flu.' Inside Brazil's hospitals, doctors know the horrifying reality",
description: "In Brazil's largest and most badly infected city, coronavirus has yet to peak, yet already the healthcare system is crumbling visibly around us. As doctors struggle valiantly to save lives, the country's President, Jair Bolsonaro, seems more focused on anothe…",
url: "http://us.cnn.com/2020/05/23/americas/brazil-coronavirus-hospitals-intl/index.html",
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200523162117-brazil-graveyard-npw-super-tease.jpg",
publishedAt: "2020-05-23T19:22:51Z",
content: "Sao Paulo, Brazil (CNN)In Brazil's largest and most badly infected city, coronavirus has yet to peak, yet already the healthcare system is crumbling visibly around us. As doctors struggle valiantly t… [+7622 chars]"
},
  {
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: null,
title: "Protestors call on gov't to do more for asylum seekers risking their lives on pandemic frontlines",
description: "Advocates are calling on the government to do more to help asylum seekers currently risking their lives on the front lines of the pandemic.",
url: "https://www.ctvnews.ca/health/coronavirus/protestors-call-on-gov-t-to-do-more-for-asylum-seekers-risking-their-lives-on-pandemic-frontlines-1.4952101",
urlToImage: "https://www.ctvnews.ca/polopoly_fs/1.4952105.1590284337!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg",
publishedAt: "2020-05-24T02:13:29+00:00",
content: "TORONTO -- A group of protestors set up camp outside of the Prime Ministers constituency office in Montreal on Saturday, calling on the government to do more to help asylum seekers currently riskin… [+3569 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: null,
title: "COVIDIOTS: Trinity Bellwoods jam-packed despite rules",
description: "The covidiots were out in full force Saturday at Toronto’s Trinity Bellwoods Park. The hipster favourite at the west end of Queen Street West was filled with people who apparently have never …",
url: "https://torontosun.com/news/local-news/covidiots-trinity-bellwoods-jam-packed-despite-rules",
urlToImage: "https://postmediatorontosun.files.wordpress.com/2020/05/crowd.jpg",
publishedAt: "2020-05-24T01:18:00+00:00",
content: "The covidiots were out in full force Saturday at Toronto’s Trinity Bellwoods Park. The hipster favourite at the west end of Queen Street West was filled with people who apparently have never heard of… [+2577 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: "Bryann Aguilar",
title: "Thorncliffe Park shooting leaves two teenagers seriously injured",
description: "Two teenagers are in hospital after a shooting in Thorncliffe Park Saturday afternoon.",
url: "https://www.cp24.com/news/thorncliffe-park-shooting-leaves-two-teenagers-seriously-injured-1.4951994",
urlToImage: "https://www.cp24.com/polopoly_fs/1.4952073.1590281228!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg",
publishedAt: "2020-05-24T00:47:00+00:00",
content: "Two teenagers are in hospital after a shooting in Thorncliffe Park Saturday afternoon. Emergency crews were called to a park near Thorncliffe Park Drive and Overlea Boulevard at around 5:30 p.m. for… [+1498 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: null,
title: "Trump golfs, urges states to further relax restrictions as U.S. deaths near 100,000 | CBC News",
description: "U.S. President Donald Trump played golf at one of his courses Saturday during the Memorial Day weekend as he urged U.S. states to reopen after coronavirus-related lockdowns. Yet many Americans remained cautious as the number of confirmed cases nationwide pass…",
url: "https://www.cbc.ca/news/world/trump-states-gold-coronavirus-covid-19-1.5582277",
urlToImage: "https://i.cbc.ca/1.5582287.1590273279!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/virus-outbreak-new-york.jpg",
publishedAt: "2020-05-23T23:29:00+00:00",
content: "U.S. President Donald Trump played golf at one of his courses Saturday during the Memorial Day weekend as he urged U.S. states to reopen after coronavirus-related lockdowns. Yet many Americans remain… [+3196 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: "dpotenteau",
title: "Coronavirus: B.C. says no, again, on releasing COVID-19 numbers for cities or regional districts",
description: "Since the pandemic began, B.C. has issued only statistics for its five health regions: Vancouver Coastal, Fraser, Vancouver Island, Interior and Northern.",
url: "http://globalnews.ca/news/6979061/coronavirus-b-c-numbers-regions-cities/",
urlToImage: "https://shawglobalnews.files.wordpress.com/2020/05/2020-05-23-dr-bonnie-henry.jpg?quality=70&strip=all&w=720&h=379&crop=1",
publishedAt: "2020-05-23T22:36:07+00:00",
content: "B.C. health officials are holding firm on a policy not to share data on confirmed coronavirus cases for specific communities — though say they could one day release that data. On Saturday, as usual,… [+4258 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: "Jeff Labine",
title: "COVID-19: Alberta records 18 new cases Saturday, one new death",
description: "COVID-19: Alberta records 18 new cases Saturday, one new death",
url: "https://edmontonjournal.com/news/local-news/covid-19-hinshaw-may-23",
urlToImage: "https://postmediaedmontonjournal2.files.wordpress.com/2020/05/enterprise-farmers-market-1.jpg",
publishedAt: "2020-05-23T21:54:17+00:00",
content: "Alberta recorded 18 new cases of COVID-19 Saturday, bringing the total number of active cases to 814. One additional death, in the Calgary zone, was also recorded Saturday, bringing the provincial t… [+888 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: null,
title: "8 new COVID-19 deaths in Ottawa, but only 2 new cases | CBC News",
description: "The new deaths reported by Ottawa Public Health on Saturday afternoon bring the city's death toll from the respiratory virus to 228.",
url: "https://www.cbc.ca/news/canada/ottawa/covid-19-may-23-2020-1.5582116",
urlToImage: "https://i.cbc.ca/1.5581711.1590192074!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/canada-goose-john-a-macdonald-parkway-cyclist-biking-ottawa.jpg",
publishedAt: "2020-05-23T19:01:00+00:00",
content: "Eight more COVID-19 deaths were reported by Ottawa Public Health on Saturday afternoon, bringing the city's death toll from the respiratory virus to 228. Despite the grim news, the public health aut… [+735 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: "djuricmickey",
title: "Moose Jaw to welcome Snowbirds home with huge hearts throughout the city",
description: "'I thought this would be a really good way to… show the Snowbirds and 15 Wing we support and love them,' said 15 Wing Hon. Col. Lisa Franks of the show of hearts.",
url: "http://globalnews.ca/news/6978803/snowbirds-return-moose-jaw-may-25/",
urlToImage: "https://shawglobalnews.files.wordpress.com/2020/05/jenn-casey.jpg?quality=70&strip=all&w=720&h=379&crop=1",
publishedAt: "2020-05-23T19:00:14+00:00",
content: "The Canadian Forces Snowbirds will be welcomed home on Monday with hearts so huge they can be seen from the sky. The Snowbirds team is returning to their official home in Moose Jaw, Sask., on Monday… [+2216 chars]"
},
{
source: {
id: "google-news-ca",
name: "Google News (Canada)"
},
author: null,
title: "The leeway factor: As coronavirus lockdowns lift, how far can we return to normal without triggering a second wave?",
description: "Determining how much freedom to allow is a question bedevilling politicians and public health officials across the country",
url: "https://www.theglobeandmail.com/canada/article-the-leeway-factor-as-coronavirus-lockdowns-lift-how-far-can-we/",
urlToImage: "https://www.theglobeandmail.com/resizer/WZNuliDVimUoY-NXqa6NZhwU2Qs=/1200x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/2T5DRTM3RBDRDBVFZLTEYAI6DY.jpg",
publishedAt: "2020-05-23T12:12:18+00:00",
content: "On the evening of May 21, 2020, Montrealers relax in Jeanne-Mance Park. Kate Hutchinson/The Globe and Mail How much more contact will be too much? As provinces across Canada lift physical distanci… [+15150 chars]"
},
{
source: {
id: "mashable",
name: "Mashable"
},
author: "Sasha Lekach",
title: "How to make iPhone's Screen Time actually helpful",
description: "Maybe this year we'll actually spend less time staring at a phone screen.",
url: "https://mashable.com/article/screen-time-ios-iphone-wwdc-2019-improve/",
urlToImage: "https://mondrian.mashable.com/2019%252F05%252F29%252F2b%252Fc28429efe72d4cd6ae4e1f36a6d5bcb6.7e8a8.jpg%252F1200x630.jpg?signature=_KJ1rjuTpolkLOy9GFR88GbTg80=",
publishedAt: "2019-05-29T15:00:00Z",
content: "Your iPhone is keeping track, but is it enough? It's been a year since Apple introduced a new feature to its iOS settings: Screen Time,the activity and phone use tracker.  Since updating to iOS … [+5271 chars]"
},
{
source: {
id: "mashable",
name: "Mashable"
},
author: "Marcus Gilmer",
title: "AOC opens up about death threats after baseball team shows offensive video of her",
description: "'Words matter, and can have consequences for safety.'",
url: "https://mashable.com/article/aoc-fresno-grizzlies-video-castro-kim-jon-un-death-threats/",
urlToImage: "https://mondrian.mashable.com/2019%252F05%252F29%252F4b%252Fe87b5ba10314494b8f529c9f05407c4c.4c53f.png%252F1200x630.png?signature=YzkiA_GKka3YNKLqxb6fvKifNKo=",
publishedAt: "2019-05-29T14:51:29Z",
content: "Alexandria Ocasio-Cortez opened up about death threats on Twitter following a troubling video from a minor league baseball team.  The freshman congresswoman took to Twitter to level criticism at the… [+2719 chars]"
},
{
source: {
id: "mashable",
name: "Mashable"
},
author: "Sasha Lekach",
title: "Uber will now kick off riders with low ratings",
description: "Drivers can get deactivated, and now so can you.",
url: "https://mashable.com/article/uber-us-canada-rider-ratings-deactivation/",
urlToImage: "https://mondrian.mashable.com/2019%252F05%252F29%252F62%252F019202836dda42f9a508830e94ef2f41.cd2aa.jpg%252F1200x630.jpg?signature=GVUvqiudwXUBp1yp9WeEcM9FwOk=",
publishedAt: "2019-05-29T14:00:00Z",
content: "Uber drivers with low ratings can get deactivated from the Uber platform. Now, passengers who consistently get well below a five-star rating will get the same treatment.  This feature already rolled… [+2204 chars]"
},
{
source: {
id: "mashable",
name: "Mashable"
},
author: "Kellen Beck",
title: "Metal Mario makes his Hot Wheels debut this summer",
description: "Metal Mario joins the fray.",
url: "https://mashable.com/article/metal-mario-hot-wheels/",
urlToImage: "https://mondrian.mashable.com/2019%252F05%252F29%252F0a%252F683206607d694bedbbd56d0f535fb74c.fee57.png%252F1200x630.png?signature=LXeezm6zsqYf6EVJttTbQ0zhkuk=",
publishedAt: "2019-05-29T13:00:00Z",
content: "Metal Mario has a need for speed and he finally has an outlet for it now that he's going to be a Hot Wheels toy. Metal Mario is joining the Mario Kart Hot Wheels lineup this summer, ready to race re… [+827 chars]"
},
{
source: {
id: "mashable",
name: "Mashable"
},
author: "Karissa Bell",
title: "Amazon challenges Google with smaller, cheaper Echo Show",
description: "Amazon just ratcheted up the pressure on Google.",
url: "https://mashable.com/article/amazon-echo-show-5/",
urlToImage: "https://mondrian.mashable.com/2019%252F05%252F29%252F4d%252Fd91b4bcb383142c1b52ffbac16165110.01151.jpg%252F1200x630.jpg?signature=R9UT45RZefZ53JiuK0HJ5OQNCoU=",
publishedAt: "2019-05-29T13:00:00Z",
content: "Amazon just ratcheted up the pressure on Google in a major way. The company just unveiled its new Echo Show 5, a smaller and cheaper version of its Echo Show speaker. The $89.99 device is available … [+2026 chars]"
},
{
source: {
id: "mashable",
name: "Mashable"
},
author: "Anthony McGlynn",
title: "DC’s ‘Doom Patrol’ is the rare superhero show that understands trauma",
description: "The longest, greatest battles we face are against ourselves.",
url: "https://mashable.com/article/doom-patrol-mental-health-trauma/",
urlToImage: "https://mondrian.mashable.com/2019%252F05%252F29%252F11%252F8774903b15d649c693edd471b0f82e94.e7b54.jpg%252F1200x630.jpg?signature=AKcoR7ti6l_sj3X-_f_3l5N_d3o=",
publishedAt: "2019-05-29T12:00:00Z",
content: "Superhero stories have taught us that surviving the worst circumstances can be powerfully transformative, like Tony Stark building the first Iron Man suit or Bruce Wayne becoming Batman. But the real… [+5954 chars]"
},
{
source: {
id: "financial-post",
name: "Financial Post"
},
author: "Jake Edmiston",
title: "Canadian retail sales in March saw worst drop on record — and that’s just the start",
description: "Only 38 per cent of people say they feel safe going to a store",
url: "https://business.financialpost.com/news/retail-marketing/canadian-retail-sales-in-march-saw-worst-drop-on-record-and-thats-just-the-start",
urlToImage: "https://financialpostcom.files.wordpress.com/2018/12/couche-tard.jpg",
publishedAt: "2020-05-22T21:58:20Z",
content: "The desperate situation for Canadian retailers came into clearer focus on Friday as Statistics Canada released a report showing record-breaking declines of billions of dollars in sector-wide sales du… [+5349 chars]"
},
{
source: {
id: "financial-post",
name: "Financial Post"
},
author: "Kevin Carmichael",
title: "As recession reshapes consumer and corporate behaviour, smart companies will seize chance to change",
description: "Kevin Carmichael: Existing companies must pivot towards sources of new demand, provided their managers are talented enough to act",
url: "https://business.financialpost.com/news/economy/as-recession-reshapes-consumer-and-corporate-behaviour-smart-companies-will-seize-chance-to-change?video_autoplay=true",
urlToImage: "https://financialpostcom.files.wordpress.com/2020/05/burberry.jpg",
publishedAt: "2020-05-22T20:01:24Z",
content: "It’s a bad time to be a maker of expensive clothes — just ask a maker of expensive clothes. “Tailored clothing is probably going to be near the bottom of people’s priorities,” said Stephen Granovsky… [+6002 chars]"
},
{
source: {
id: "financial-post",
name: "Financial Post"
},
author: "Gabriel Friedman",
title: "2020 was supposed to be copper’s year to shine. Now everything is uncertain",
description: "As economic activity shut down, a surplus has built up and analysts are struggling to peg where the price will end up this year amid unclear demand",
url: "https://business.financialpost.com/commodities/mining/copper-disrupted",
urlToImage: "https://financialpostcom.files.wordpress.com/2020/05/copper-rods.jpg",
publishedAt: "2020-05-22T18:00:46Z",
content: "Earlier this month, Toronto-based Hudbay Minerals Inc. injected US$115 million in cash to its balance sheet, shoring up the company’s finances just as a veil of uncertainty settles over the copper ma… [+5158 chars]"
},
{
source: {
id: "financial-post",
name: "Financial Post"
},
author: "Jamie Golombek",
title: "Here’s all the financial relief the government is offering seniors and what might be on tap",
description: "Jamie Golombek: Seniors hit hard financially by the pandemic are getting some additional support with the potential for more later",
url: "https://business.financialpost.com/personal-finance/taxes/what-the-government-is-offering-seniors-what-might-be-on-tap",
urlToImage: "https://financialpostcom.files.wordpress.com/2020/05/seniors.jpg",
publishedAt: "2020-05-22T17:15:24Z",
content: "Some seniors have experienced significant financial challenges during the COVID-19 pandemic, from the increased costs associated with home delivery for groceries and take-out meals, to the drop in th… [+6391 chars]"
},
{
source: {
id: "financial-post",
name: "Financial Post"
},
author: "Howard Levitt",
title: "Howard Levitt: My employees say they have COVID-19 symptoms. I don’t believe them and want them back. What can I do?",
description: "Workplace law expert answers your questions about the COVID-19 pandemic",
url: "https://business.financialpost.com/executive/careers/howard-levitt-my-employees-say-they-have-covid-19-symptoms-i-dont-believe-them-and-want-them-back-what-can-i-do",
urlToImage: "https://financialpostcom.files.wordpress.com/2020/05/office-1.jpg",
publishedAt: "2020-05-22T16:15:27Z",
content: "My law office has fully reopened along with much of Ontario. Like many jobs, it is difficult to “lawyer” as effectively from the comfort of your home. At least in employment litigation, you require a… [+7283 chars]"
},
{
source: {
id: "financial-post",
name: "Financial Post"
},
author: "Bloomberg News",
title: "Apps to book elevator rides, masks and staggered shifts: Toronto bankers get glimpse of new office normal",
description: "Cadillac Fairview, owner of TD Centre and RBC Centre, says office workers should brace for dramatic changes",
url: "https://business.financialpost.com/real-estate/property-post/rules-for-torontos-bankers-book-an-elevator-ride-wear-a-mask?video_autoplay=true",
urlToImage: "https://financialpostcom.files.wordpress.com/2020/05/banks-1.jpg",
publishedAt: "2020-05-22T15:04:13Z",
content: "Elevator queues, mandatory masks and staggered start times may await Toronto’s office workers when they start venturing back to North America’s second-largest financial centre. These are among the m… [+3490 chars]"
},
{
source: {
id: "financial-post",
name: "Financial Post"
},
author: "Reuters",
title: "U.S. secures 300 million doses, almost a third, of potential AstraZeneca COVID-19 vaccine",
description: "First deliveries due to begin in September",
url: "https://business.financialpost.com/technology/u-s-secures-300-million-doses-of-potential-astrazeneca-covid-19-vaccine-3?video_autoplay=true",
urlToImage: "https://financialpostcom.files.wordpress.com/2020/05/vaccine-1.jpg",
publishedAt: "2020-05-22T14:31:15Z",
content: "The United States has secured almost a third of the first one billion doses planned for AstraZeneca’s experimental COVID-19 vaccine by pledging up to $1.2 billion, as world powers scramble for medici… [+4285 chars]"
},

{
source: {
id: "techcrunch",
name: "TechCrunch"
},
author: "Zack Whittaker",
title: "Hackers release a new jailbreak that unlocks every iPhone - TechCrunch",
description: "The jailbreak works on devices up to iOS 13.5, which Apple released this week.",
url: "http://techcrunch.com/2020/05/23/hackers-iphone-new-jailbreak/",
urlToImage: "https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-dv150072.jpg?w=609",
publishedAt: "2020-05-24T04:07:21Z",
content: "A renowned iPhone hacking team has released a new “jailbreak” tool that unlocks every iPhone, even the most recent models running the latest iOS 13.5. For as long as Apple has kept up its “walled ga… [+1560 chars]"
},
{
source: {
id: "cbc-news",
name: "CBC News"
},
author: null,
title: "Trump golfs, urges states to further relax restrictions as U.S. deaths near 100,000 - CBC.ca",
description: "U.S. President Donald Trump played golf at one of his courses Saturday during the Memorial Day weekend as he urged U.S. states to reopen after coronavirus-related lockdowns. Yet many Americans remained cautious as the number of confirmed cases nationwide pass…",
url: "https://www.cbc.ca/news/world/trump-states-gold-coronavirus-covid-19-1.5582277",
urlToImage: "https://i.cbc.ca/1.5582287.1590273279!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/virus-outbreak-new-york.jpg",
publishedAt: "2020-05-23T23:29:00Z",
content: "U.S. President Donald Trump played golf at one of his courses Saturday during the Memorial Day weekend as he urged U.S. states to reopen after coronavirus-related lockdowns. Yet many Americans remain… [+3196 chars]"
},


{
source: {
id: "cbc-news",
name: "CBC News"
},
author: null,
title: "Liberals propose more COVID-19 sittings, summer sessions in new motion - CBC.ca",
description: "The Liberal government has tabled a motion that would see Parliament’s special committee on COVID-19 meet for an additional day each week — a proposal that would involve a limited number of MPs convening in the House of Commons alongside members outside Ottaw…",
url: "https://www.cbc.ca/news/politics/liberals-propose-more-covid-19-sittings-summer-sessions-in-new-motion-1.5582195",
urlToImage: "https://i.cbc.ca/1.5549261.1588178744!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/house-of-commons-april-29-2020.jpg",
publishedAt: "2020-05-23T21:13:00Z",
content: "The Liberal government has tabled a motion that would see Parliament's special committee on COVID-19 meet for an additional day each week a proposal that would involve a limited number of MPs conveni… [+4906 chars]"
},

{
source: {
id: "cbc-news",
name: "CBC News"
},
author: null,
title: "N.B. gets a trim after COVID-19 lockdown - CBC.ca",
description: "New Brunswick moved into the next phase of recovery on Friday, allowing salons and barbershops to reopen.",
url: "https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-salons-barbershops-reopen-1.5582194",
urlToImage: "https://i.cbc.ca/1.5582198.1590264826!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/karen-kindred-haircut.jpg",
publishedAt: "2020-05-23T20:43:00Z",
content: "New Brunswick's move to the next phase of COVID-19 recovery has brought some shear relief for people who were starting to look shaggy since restrictions began. On Friday, Premier Blaine Higgs moved … [+2526 chars]"
},
{
source: {
id: "cbc-news",
name: "CBC News"
},
author: null,
title: "COVID-19 in Sask: 3 new cases, 14 recoveries, 6 in hospital - CBC.ca",
description: "The province says there are three new cases of COVID-19 in Saskatchewan as of Saturday, bringing the provincial total to 630.",
url: "https://www.cbc.ca/news/canada/saskatchewan/covid-19-may-23-2020-1.5582178",
urlToImage: "https://i.cbc.ca/1.5558338.1588794352!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/saskatchewan-health-authority-covid-19-assessment-site-nurse-ppe-patient-coronavirus.jpg",
publishedAt: "2020-05-23T20:00:00Z",
content: "The province says there are three new cases of COVID-19 in Saskatchewan as of Saturday, bringing the provincial total to 630.  Two of the new cases are in Saskatoon and one is in the far north regio… [+562 chars]"
},
    {
      
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Riana Pfefferkorn',
      title:
        'The FBI is mad because it keeps getting into locked iPhones without Apple’s help',
      description:
        'The debate over device encryption isn’t dead, it was merely resting. And it just won’t go away.',
      url:
        'https://techcrunch.com/2020/05/22/the-fbi-is-mad-because-it-keeps-getting-into-locked-iphones-without-apples-help/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-1168923033.jpg?w=600',
      publishedAt: '2020-05-22T21:33:05Z',
      content:
        'The debate over encryption continues to drag on without end.\r\nIn recent months, the discourse has largely swung away from encrypted smartphones to focus instead on end-to-end encrypted messaging. But… [+8531 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Darrell Etherington',
      title:
        'How to make the most of your at-home videoconference setup: Microphone edition',
      description:
        'Working from home isn’t going anywhere anytime soon, and a slew of companies just announced longer-term initiatives to make their remote work practices either extend or permanent. That means for some it’s the perfect time to take their at-home videoconferenci…',
      url:
        'https://techcrunch.com/2020/05/22/how-to-make-the-most-of-your-at-home-videoconference-setup-microphone-edition/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/05/mic-three-up-hero.jpg?w=600',
      publishedAt: '2020-05-22T20:03:26Z',
      content:
        'Working from home isn’t going anywhere anytime soon, and a slew of companies just announced longer-term initiatives to make their remote work practices either extend or permanent. That means for some… [+6950 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Kirsten Korosec',
      title:
        'Scale AI releases free lidar dataset to power self-driving car development',
      description:
        'High quality data is the fuel that powers AI algorithms. Without a continual flow of labeled data, bottlenecks can occur and the algorithm will slowly get worse and add risk to the system. It’s why labeled data is so critical for companies like Zoox, Cruise a…',
      url:
        'https://techcrunch.com/2020/05/22/scale-ai-releases-free-lidar-dataset-to-power-self-driving-car-development/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/05/LiDAR-comparison-credit_-Scale-AI.png?w=764',
      publishedAt: '2020-05-22T19:56:39Z',
      content:
        'High quality data is the fuel that powers AI algorithms. Without a continual flow of labeled data, bottlenecks can occur and the algorithm will slowly get worse and add risk to the system.\r\nIt’s why … [+3911 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Greg Kumparak',
      title: 'Box will let employees work from home until at least 2021',
      description:
        'Another tech company is joining the list of those planning on going remote for the long haul: Box . Box CEO Aaron Levie announced this morning that the company will “remain a digital-first organization” moving forward. While it sounds like they’re still worki…',
      url:
        'https://techcrunch.com/2020/05/22/box-will-let-employees-work-from-home-until-at-least-2021/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-611385448.jpg?w=600',
      publishedAt: '2020-05-22T19:53:47Z',
      content:
        'Another tech company is joining the list of those planning on going remote for the long haul: Box .\r\nBox CEO Aaron Levie announced this morning that the company will “remain a digital-first organizat… [+1232 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Natasha Lomas',
      title: 'First major GDPR decisions looming on Twitter and Facebook',
      description:
        'The lead data regulator for much of big tech in Europe is moving inexorably towards issuing its first major cross-border GDPR decision — saying today it’s submitted a draft decision related to Twitter’s business to its fellow EU watchdogs for review. “The dra…',
      url:
        'https://techcrunch.com/2020/05/22/first-major-gdpr-decisions-looming-on-twitter-and-facebook/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1055352580.jpg?w=601',
      publishedAt: '2020-05-22T19:30:19Z',
      content:
        'The lead data regulator for much of big tech in Europe is moving inexorably towards issuing its first major cross-border GDPR decision — saying today it’s submitted a draft decision related to Twitte… [+8527 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Devin Coldewey',
      title:
        'Minecraft Dungeons has charm and potential, but needs lot more time in the furnace',
      description:
        'Minecraft is one of the popular games on the planet, so it’s natural that Microsoft, after buying creator Mojang some years back, would attempt to apply the genre’s playful, blocky aesthetic to other genres. After modest success with the Story Mode adventure …',
      url:
        'https://techcrunch.com/2020/05/22/minecraft-dungeons-has-charm-and-potential-but-needs-lot-more-time-in-the-furnace/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/05/minecraft-dungeons-3.jpg?w=686',
      publishedAt: '2020-05-22T19:28:48Z',
      content:
        'Minecraft is one of the popular games on the planet, so it’s natural that Microsoft, after buying creator Mojang some years back, would attempt to apply the genre’s playful, blocky aesthetic to other… [+8448 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Danny Crichton, Alex Wilhelm, Natasha Mascarenhas',
      title:
        '3 views on the life and death of college towns, remote work and the future of startup hubs',
      description:
        'The global pandemic has halted travel, shunted schools online and shut down many cities, but the future of college-town America is an area of deep concern for the startup world. College towns have done exceedingly well with the rise of the knowledge economy a…',
      url:
        'https://techcrunch.com/2020/05/22/3-views-on-the-life-and-death-of-college-towns-remote-work-and-the-future-of-startup-hubs/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-1216618760.jpg?w=712',
      publishedAt: '2020-05-22T19:00:03Z',
      content:
        'The global pandemic has halted travel, shunted schools online and shut down many cities, but the future of college-town America is an area of deep concern for the startup world.\r\nCollege towns have d… [+1996 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Darrell Etherington',
      title:
        "SpaceX's first crewed spacecraft launch is officially cleared to proceed on May 27",
      description:
        'SpaceX has received approval on its mission to launch NASA astronauts for the first time ever on May 27, having passed the final Flight Readiness Review (FRR) conduced by the agency to ensure everything is go for launch. This final check, conducted over the p…',
      url:
        'https://techcrunch.com/2020/05/22/spacexs-first-crewed-spacecraft-launch-is-officially-cleared-to-proceed-on-may-27/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/05/crew-demo-2-spacex.jpg?w=732',
      publishedAt: '2020-05-22T18:35:44Z',
      content:
        'SpaceX has received approval on its mission to launch NASA astronauts for the first time ever on May 27, having passed the final Flight Readiness Review (FRR) conduced by the agency to ensure everyth… [+2180 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Neesha A. Tambe',
      title:
        'Startup Battlefield is going virtual with TechCrunch Disrupt 2020',
      description:
        'You read that right. The big announcement came yesterday – TechCrunch Disrupt is now fully virtual. What does this mean for Startup Battlefield? More opportunity. The best companies from across the globe, an even bigger launch platform, the eyes of more inves…',
      url:
        'https://techcrunch.com/2020/05/22/startup-battlefield-is-going-virtual-with-techcrunch-disrupt-2020/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2015/08/9726191699_6ba4b89744_o.jpg?w=601',
      publishedAt: '2020-05-22T17:05:10Z',
      content:
        'You read that right. The big announcement came yesterday – TechCrunch Disrupt is now fully virtual. What does this mean for Startup Battlefield? More opportunity. The best companies from across the g… [+3913 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Brian Heater',
      title:
        'Netflix’s beloved animated series Tuca & Bertie is getting a second life on Adult Swim',
      description:
        'Tuca & Bertie was wonderful. It was a hilarious and heartfelt examination of adult relationships, coupled with whimsical animated visuals. And like most good things in this world, it was simple too beautiful to live. The Netflix series, which starred comedian…',
      url:
        'https://techcrunch.com/2020/05/22/netflixs-beloved-animated-series-tuca-bertie-is-getting-a-second-life-on-adult-swim/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2019/06/tuca-bertie.jpg?w=710',
      publishedAt: '2020-05-22T17:04:28Z',
      content:
        'Tuca &amp; Bertie was wonderful. It was a hilarious and heartfelt examination of adult relationships, coupled with whimsical animated visuals. And like most good things in this world, it was simple t… [+1012 chars]',
    },
  ];

}