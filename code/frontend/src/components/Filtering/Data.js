//DELETE WHEN FIGURE OUT HOW TO GET DATA FROM BACKEND

let items = [
  {
    'id': 1,
    'fname': 'Earl',
    'lname': 'Spencer',
    'company': 'espencer0@latimes.com',
    'reporting_manager': 'Vietnam',
    'po_ref': '230.102.136.72'
  }, {
    'id': 2,
    'fname': 'Laura',
    'lname': 'Lawrence',
    'company': 'llawrence1@hibu.com',
    'reporting_manager': 'Czech Republic',
    'po_ref': '68.71.237.213'
  }, {
    'id': 3,
    'fname': 'Kathy',
    'lname': 'Schmidt',
    'company': 'kschmidt2@marketwatch.com',
    'reporting_manager': 'Philippines',
    'po_ref': '246.77.46.156'
  }, {
    'id': 4,
    'fname': 'Sandra',
    'lname': 'Price',
    'company': 'sprice3@posterous.com',
    'reporting_manager': 'Philippines',
    'po_ref': '222.226.217.225'
  }, {
    'id': 5,
    'fname': 'Kathleen',
    'lname': 'Hamilton',
    'company': 'khamilton4@prweb.com',
    'reporting_manager': 'Indonesia',
    'po_ref': '141.207.162.250'
  }, {
    'id': 6,
    'fname': 'Terry',
    'lname': 'Jordan',
    'company': 'tjordan5@merriam-webster.com',
    'reporting_manager': 'France',
    'po_ref': '26.245.117.95'
  }, {
    'id': 7,
    'fname': 'Dorothy',
    'lname': 'Alvarez',
    'company': 'dalvarez6@biglobe.ne.jp',
    'reporting_manager': 'Brazil',
    'po_ref': '123.0.246.196'
  }, {
    'id': 8,
    'fname': 'Shawn',
    'lname': 'Russell',
    'company': 'srussell7@jalbum.net',
    'reporting_manager': 'Philippines',
    'po_ref': '195.254.254.142'
  }, {
    'id': 9,
    'fname': 'Kathryn',
    'lname': 'Matthews',
    'company': 'kmatthews8@youtube.com',
    'reporting_manager': 'Indonesia',
    'po_ref': '166.154.113.77'
  }, {
    'id': 10,
    'fname': 'Bruce',
    'lname': 'Cunningham',
    'company': 'bcunningham9@cmu.edu',
    'reporting_manager': 'Indonesia',
    'po_ref': '197.245.199.148'
  }, {
    'id': 11,
    'fname': 'Michael',
    'lname': 'Wheeler',
    'company': 'mwheelera@soundcloud.com',
    'reporting_manager': 'United States',
    'po_ref': '192.42.229.72'
  }, {
    'id': 12,
    'fname': 'Ronald',
    'lname': 'Nguyen',
    'company': 'rnguyenb@chron.com',
    'reporting_manager': 'Vietnam',
    'po_ref': '141.69.176.157'
  }, {
    'id': 13,
    'fname': 'Gregory',
    'lname': 'Howell',
    'company': 'ghowellc@webs.com',
    'reporting_manager': 'Gambia',
    'po_ref': '7.51.22.138'
  }, {
    'id': 14,
    'fname': 'Samuel',
    'lname': 'Lane',
    'company': 'slaned@furl.net',
    'reporting_manager': 'Ivory Coast',
    'po_ref': '12.164.139.66'
  }, {
    'id': 15,
    'fname': 'Maria',
    'lname': 'Sims',
    'company': 'msimse@studiopress.com',
    'reporting_manager': 'Brazil',
    'po_ref': '133.30.25.179'
  }, {
    'id': 16,
    'fname': 'Earl',
    'lname': 'Price',
    'company': 'epricef@ameblo.jp',
    'reporting_manager': 'China',
    'po_ref': '173.205.16.97'
  }, {
    'id': 17,
    'fname': 'Adam',
    'lname': 'Bennett',
    'company': 'abennettg@yellowpages.com',
    'reporting_manager': 'Guatemala',
    'po_ref': '56.244.244.49'
  }, {
    'id': 18,
    'fname': 'Paula',
    'lname': 'Richards',
    'company': 'prichardsh@e-recht24.de',
    'reporting_manager': 'Mongolia',
    'po_ref': '185.252.56.17'
  }, {
    'id': 19,
    'fname': 'Nancy',
    'lname': 'Wood',
    'company': 'nwoodi@1und1.de',
    'reporting_manager': 'Indonesia',
    'po_ref': '96.234.18.172'
  }, {
    'id': 20,
    'fname': 'Gloria',
    'lname': 'Lynch',
    'company': 'glynchj@answers.com',
    'reporting_manager': 'Indonesia',
    'po_ref': '210.183.128.165'
  }, {
    'id': 21,
    'fname': 'Jonathan',
    'lname': 'Reyes',
    'company': 'jreyesk@princeton.edu',
    'reporting_manager': 'China',
    'po_ref': '36.52.151.160'
  }, {
    'id': 22,
    'fname': 'Keith',
    'lname': 'Dixon',
    'company': 'kdixonl@wordpress.org',
    'reporting_manager': 'Indonesia',
    'po_ref': '93.222.158.136'
  }, {
    'id': 23,
    'fname': 'Bonnie',
    'lname': 'Taylor',
    'company': 'btaylorm@dot.gov',
    'reporting_manager': 'Poland',
    'po_ref': '231.103.233.94'
  }, {
    'id': 24,
    'fname': 'Benjamin',
    'lname': 'Meyer',
    'company': 'bmeyern@delicious.com',
    'reporting_manager': 'Indonesia',
    'po_ref': '75.252.39.120'
  }, {
    'id': 25,
    'fname': 'Nancy',
    'lname': 'Harper',
    'company': 'nharpero@prweb.com',
    'reporting_manager': 'France',
    'po_ref': '209.40.72.145'
  }, {
    'id': 26,
    'fname': 'Bonnie',
    'lname': 'Fuller',
    'company': 'bfullerp@ovh.net',
    'reporting_manager': 'Poland',
    'po_ref': '26.114.1.4'
  }, {
    'id': 27,
    'fname': 'Harold',
    'lname': 'King',
    'company': 'hkingq@accuweather.com',
    'reporting_manager': 'Indonesia',
    'po_ref': '79.105.188.195'
  }, {
    'id': 28,
    'fname': 'Christopher',
    'lname': 'Bailey',
    'company': 'cbaileyr@topsy.com',
    'reporting_manager': 'Dominican Republic',
    'po_ref': '117.131.97.17'
  }, {
    'id': 29,
    'fname': 'Keith',
    'lname': 'Fields',
    'company': 'kfieldss@mediafire.com',
    'reporting_manager': 'Vietnam',
    'po_ref': '237.214.120.202'
  }, {
    'id': 30,
    'fname': 'Peter',
    'lname': 'Dixon',
    'company': 'pdixont@mac.com',
    'reporting_manager': 'Philippines',
    'po_ref': '67.217.168.218'
  }, {
    'id': 31,
    'fname': 'Ruth',
    'lname': 'Wright',
    'company': 'rwrightu@wordpress.org',
    'reporting_manager': 'South Africa',
    'po_ref': '249.57.131.163'
  }, {
    'id': 32,
    'fname': 'Douglas',
    'lname': 'Reynolds',
    'company': 'dreynoldsv@spiegel.de',
    'reporting_manager': 'Japan',
    'po_ref': '240.174.178.216'
  }, {
    'id': 33,
    'fname': 'Kenneth',
    'lname': 'Ramos',
    'company': 'kramosw@virginia.edu',
    'reporting_manager': 'Russia',
    'po_ref': '117.25.143.201'
  }, {
    'id': 34,
    'fname': 'Marie',
    'lname': 'Rogers',
    'company': 'mrogersx@vk.com',
    'reporting_manager': 'Nigeria',
    'po_ref': '41.158.245.248'
  }, {
    'id': 35,
    'fname': 'Carl',
    'lname': 'Scott',
    'company': 'cscotty@examiner.com',
    'reporting_manager': 'China',
    'po_ref': '21.83.136.139'
  }, {
    'id': 36,
    'fname': 'Irene',
    'lname': 'Anderson',
    'company': 'iandersonz@tinypic.com',
    'reporting_manager': 'Brazil',
    'po_ref': '84.233.26.131'
  }, {
    'id': 37,
    'fname': 'Melissa',
    'lname': 'Hunt',
    'company': 'mhunt10@unblog.fr',
    'reporting_manager': 'Bulgaria',
    'po_ref': '173.168.213.137'
  }, {
    'id': 38,
    'fname': 'Alice',
    'lname': 'Young',
    'company': 'ayoung11@multiply.com',
    'reporting_manager': 'Indonesia',
    'po_ref': '134.140.230.201'
  }, {
    'id': 39,
    'fname': 'Roy',
    'lname': 'Nguyen',
    'company': 'rnguyen12@umich.edu',
    'reporting_manager': 'Venezuela',
    'po_ref': '93.242.135.199'
  }, {
    'id': 40,
    'fname': 'Stephen',
    'lname': 'Peterson',
    'company': 'speterson13@census.gov',
    'reporting_manager': 'Poland',
    'po_ref': '77.112.61.62'
  }];

export default items;

export const reportinfo = [
  {
    'Contractor Name': 'Wayne Gretzky',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'April',
    'Billing Month': 'May',
    'Total Monthly Cost': 12645.83,
    'Hiring Manager': 'Mark Messier',
    'Start Date': '2017-4-3',
    'End Date': '2017-9-30'
  },
  {
    'Contractor Name': 'Wayne Gretzky',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'May',
    'Billing Month': 'June',
    'Total Monthly Cost': 12645.83,
    'Hiring Manager': 'Mark Messier',
    'Start Date': '2017-4-3',
    'End Date': '2017-9-30'
  },
  {
    'Contractor Name': 'Wayne Gretzky',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'June',
    'Billing Month': 'July',
    'Total Monthly Cost': 12645.83,
    'Hiring Manager': 'Mark Messier',
    'Start Date': '2017-4-3',
    'End Date': '2017-9-30'
  },
  {
    'Contractor Name': 'Wayne Gretzky',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'July',
    'Billing Month': 'August',
    'Total Monthly Cost': 12645.83,
    'Hiring Manager': 'Mark Messier',
    'Start Date': '2017-4-3',
    'End Date': '2017-9-30'
  },
  {
    'Contractor Name': 'Wayne Gretzky',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'August',
    'Billing Month': 'September',
    'Total Monthly Cost': 12645.83,
    'Hiring Manager': 'Mark Messier',
    'Start Date': '2017-4-3',
    'End Date': '2017-9-30'
  },
  {
    'Contractor Name': 'Wayne Gretzky',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'September',
    'Billing Month': 'October',
    'Total Monthly Cost': 12645.83,
    'Hiring Manager': 'Mark Messier',
    'Start Date': '2017-4-3',
    'End Date': '2017-9-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'April',
    'Billing Month': 'May',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'May',
    'Billing Month': 'June',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'June',
    'Billing Month': 'July',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'July',
    'Billing Month': 'August',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'August',
    'Billing Month': 'September',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'September',
    'Billing Month': 'October',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'October',
    'Billing Month': 'November',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Paul Coffey',
    'Company': 'Delloite',
    'Cost Centre': '742',
    'Working Month': 'November',
    'Billing Month': 'December',
    'Total Monthly Cost': 15750.00,
    'Hiring Manager': 'Glen Sather',
    'Start Date': '2017-4-24',
    'End Date': '2017-11-30'
  },
  {
    'Contractor Name': 'Henrik Sedin',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'June',
    'Billing Month': 'July',
    'Total Monthly Cost': 18900.00,
    'Hiring Manager': 'Willie Mitchell',
    'Start Date': '2017-6-5',
    'End Date': '2017-12-31'
  },
  {
    'Contractor Name': 'Henrik Sedin',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'July',
    'Billing Month': 'August',
    'Total Monthly Cost': 18900.00,
    'Hiring Manager': 'Willie Mitchell',
    'Start Date': '2017-6-5',
    'End Date': '2017-12-31'
  },
  {
    'Contractor Name': 'Henrik Sedin',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'August',
    'Billing Month': 'September',
    'Total Monthly Cost': 18900.00,
    'Hiring Manager': 'Willie Mitchell',
    'Start Date': '2017-6-5',
    'End Date': '2017-12-31'
  },
  {
    'Contractor Name': 'Henrik Sedin',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'September',
    'Billing Month': 'October',
    'Total Monthly Cost': 18900.00,
    'Hiring Manager': 'Willie Mitchell',
    'Start Date': '2017-6-5',
    'End Date': '2017-12-31'
  },
  {
    'Contractor Name': 'Henrik Sedin',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'October',
    'Billing Month': 'November',
    'Total Monthly Cost': 18900.00,
    'Hiring Manager': 'Willie Mitchell',
    'Start Date': '2017-6-5',
    'End Date': '2017-12-31'
  },
  {
    'Contractor Name': 'Henrik Sedin',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'November',
    'Billing Month': 'December',
    'Total Monthly Cost': 18900.00,
    'Hiring Manager': 'Willie Mitchell',
    'Start Date': '2017-6-5',
    'End Date': '2017-12-31'
  },
  {
    'Contractor Name': 'Henrik Sedin',
    'Company': 'PWC',
    'Cost Centre': '742',
    'Working Month': 'December',
    'Billing Month': 'December',
    'Total Monthly Cost': 18900.00,
    'Hiring Manager': 'Willie Mitchell',
    'Start Date': '2017-6-5',
    'End Date': '2017-12-31'
  }

];
