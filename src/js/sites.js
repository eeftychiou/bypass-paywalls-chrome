// Cookies from this list are blocked by default
const defaultSites = {
  'Adweek': 'adweek.com',
  'Algemeen Dagblad': 'ad.nl',
  'American Banker': 'americanbanker.com',
  'Baltimore Sun': 'baltimoresun.com',
  'Barron\'s': 'barrons.com',
  'Bloomberg': 'bloomberg.com',
  'Bloomberg Quint': 'bloombergquint.com',
  'Business Insider': 'businessinsider.com',
  'Caixin': 'caixinglobal.com',
  'Central Western Daily': 'centralwesterndaily.com.au', // articles blanked
  'Chemical & Engineering News': 'cen.acs.org', // '2/3 free articles' banner, keeps asking about cookies
  'Chicago Tribune': 'chicagotribune.com',
  'Corriere Della Sera': 'corriere.it',
  'Crain\'s Chicago Business': 'chicagobusiness.com',
  'Daily Press': 'dailypress.com',
  'De Groene Amsterdammer': 'groene.nl',
  'DeMorgen': 'demorgen.be',
  'Denver Post': 'denverpost.com',
  'De Tijd': 'tijd.be',
  'de Volkskrant': 'volkskrant.nl',
  'Dynamed Plus': 'dynamed.com',
  'Eindhovens Dagblad': 'ed.nl',
  'El Pais': 'elpais.com',
  'Encyclopedia Britannica': 'britannica.com',
  'EUObserver': 'euobserver.com',
  'Examiner': 'examiner.com.au',
  'Financial News': 'fnlondon.com',
  'Financial Times': 'ft.com',
  'First Things': 'firstthings.com',
  'Foreign Policy': 'foreignpolicy.com',
  'Fortune': 'fortune.com',
  'Genomeweb': 'genomeweb.com',
  'Glassdoor': 'glassdoor.com',
  'Haaretz English': 'haaretz.com',
  'Haaretz': 'haaretz.co.il',
  'Handelsblatt': 'handelsblatt.com',
  'Harper\'s Magazine': 'harpers.org',
  'Hartford Courant': 'courant.com',
  'Harvard Business Review': 'hbr.org',
  'Herald Sun': 'heraldsun.com.au',
  'Het Financieele Dagblad': 'fd.nl',
  'Il Manifesto': 'ilmanifesto.it',
  'Inc.com': 'inc.com',
  'Investors Chronicle': 'investorschronicle.co.uk',
  'La Nacion': 'lanacion.com.ar',
  'La Repubblica': 'repubblica.it',
  'La Stampa': 'lastampa.it',
  'La Tercera': 'latercera.com',
  'L\'Echo': 'lecho.be',
  'Le Devoir': 'ledevoir.com',
  'Le Parisien': 'leparisien.fr',
  'Les Echos': 'lesechos.fr',
  'Loeb Classical Library': 'loebclassics.com',
  'London Review of Books': 'lrb.co.uk',
  'Los Angeles Business Journal': 'labusinessjournal.com',
  'Los Angeles Times': 'latimes.com',
  'Medium': 'medium.com',
  'Mexico News Daily': 'mexiconewsdaily.com',
  'MIT Sloan Management Review': 'sloanreview.mit.edu',
  'MIT Technology Review': 'technologyreview.com',
  'Mountain View Voice': 'mv-voice.com',
  'National Post': 'nationalpost.com',
  'Neue Zürcher Zeitung': 'nzz.ch',
  'New Statesman': 'newstatesman.com',
  'New York Magazine': 'nymag.com',
  'New Zealand Herald': 'nzherald.co.nz',
  'Nikkei Asian Review': 'asia.nikkei.com',
  'NRC': 'nrc.nl',
  'NT News': 'ntnews.com.au',
  'Orange County Register': 'ocregister.com',
  'Orlando Sentinel': 'orlandosentinel.com',
  'Palo Alto Online': 'paloaltoonline.com',
  'Parool': 'parool.nl',
  'Quartz': 'qz.com',
  'Quora': 'quora.com',
  'San Diego Union Tribune': 'sandiegouniontribune.com',
  'San Francisco Chronicle': 'sfchronicle.com',
  'Scientific American': 'scientificamerican.com',
  'Seeking Alpha': 'seekingalpha.com',
  'SOFREP': 'sofrep.com',
  'Statista': 'statista.com',
  'SunSentinel': 'sun-sentinel.com',
  'Tech in Asia': 'techinasia.com',
  'Telegraaf': 'telegraaf.nl',
  'The Advertiser': 'adelaidenow.com.au',
  'The Advocate': 'theadvocate.com.au',
  'The Age': 'theage.com.au',
  'The American Interest': 'the-american-interest.com',
  'The Athletic': 'theathletic.com',
  'The Athletic UK': 'theathletic.co.uk',
  'The Atlantic': 'theatlantic.com',
  'The Australian Financial Review': 'afr.com',
  'The Australian': 'theaustralian.com.au',
  'The Business Journals': 'bizjournals.com',
  'The Canberra Times': 'canberratimes.com.au',
  'The Courier': 'thecourier.com.au',
  'The Courier Mail': 'couriermail.com.au',
  'The Daily Telegraph': 'dailytelegraph.com.au',
  'The Diplomat': 'thediplomat.com',
  'The Economist': 'economist.com',
  'The Globe and Mail': 'theglobeandmail.com',
  'The Herald': 'theherald.com.au',
  'The Hindu': 'thehindu.com',
  'The Irish Times (free articles only)': 'irishtimes.com',
  'The Japan Times': 'japantimes.co.jp',
  'The Kansas City Star': 'kansascity.com',
  'TheMarker': 'themarker.com',
  'The Mercury News': 'mercurynews.com',
  'The Mercury Tasmania': 'themercury.com.au',
  'The Morning Call': 'mcall.com',
  'The Nation': 'thenation.com',
  'The News-Gazette': 'news-gazette.com',
  'The New Yorker': 'newyorker.com',
  'The New York Times': 'nytimes.com',
  'The Philadelphia Inquirer': 'inquirer.com',
  'The Saturday Paper': 'thesaturdaypaper.com.au',
  'The Seattle Times': 'seattletimes.com',
  'The Spectator Australia': 'spectator.com.au',
  'The Spectator': 'spectator.co.uk',
  'The Sydney Morning Herald': 'smh.com.au',
  'The Telegraph': 'telegraph.co.uk',
  'The Times': 'thetimes.co.uk',
  'The Toronto Star': 'thestar.com',
  'The Wall Street Journal': 'wsj.com',
  'The Washington Post': 'washingtonpost.com',
  'The Wrap': 'thewrap.com',
  'Times Literary Supplement': 'the-tls.co.uk',
  'Towards Data Science': 'towardsdatascience.com',
  'Trouw': 'trouw.nl',
  'Vanity Fair': 'vanityfair.com',
  'Vrij Nederland': 'vn.nl',
  'Winston-Salem Journal': 'journalnow.com',
  'Wired': 'wired.com',
  '*General Paywall Bypass*': 'generalpaywallbypass'
};
