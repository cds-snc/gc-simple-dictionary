var data = [
    { label: 'AAACT', value: 'Accessibility, Accommodation and Adaptive Computer Technology', explanation:"AAACT offers a wide range of adaptations, alternate approaches, tools, training, services, resources and adaptive computer technologies for public service employees with disabilities or injuries.", link:"https://www.canada.ca/en/shared-services/corporate/aaact-program.html"},
    { label: 'AAFC', value: 'Agriculture and Agri-Food Canada'},
    { label: 'ACOA', value: 'Atlantic Canada Opportunities Agency'},
    { label: 'ADM', value: 'Assistant Deputy Minister'},
    { label: 'AECL', value: 'Atomic Energy of Canada Limited'},
    { label: 'AEM', value: 'Adobe Experience Manager', explanation:"Most departments use AEM for pages under canada.ca"},
    { label: 'APA', value: 'Atlantic Pilotage Authority Canada'},
    { label: 'API', value: 'Application Programming Interface', explanation:"This is a concept in software technology that essentially refers to how multiple applications can interact with and obtain data from one another."},
    { label: 'ATI', value: 'Access to Information'},
    { label: 'ATIP', value: 'Access to Information and Privacy', explanation: 'Canadians can request internal records and communications from the government (i.e. ATIP requests). Recent ones have included records of Slack and email chats around COVID Alert.'},
    { label: 'ATO', value: 'Authority To Operate', explanation: "This is the compliance paperwork that gets filed by software operators within in government. Approvers are often CTOs or CISOs, and they are evaluating risk. However, the paperwork and processes are very burdensome, stem from waterfall days where there were only 1-2 releases a year, and often don't provide the information someone would actually need to measure risk. Streamlining this process is a goal of CDS's. Based on US's NIST 800-53 rev 4."},
    { label: 'ATS', value: 'Applicant Tracking System', explanation: 'We use Lever at CDS'},
    { label: 'ATSSC', value: 'Administrative Tribunals Support Service of Canada'},
    { label: 'BDC', value: 'Business Development Bank of Canada'},
    { label: 'BOEW', value: 'Boîte à outils de l’expérience Web',explanation:"Une bibliothèque de code primée pour construire des sites Web accessibles, faciles d'emploi, interopérables, optimisés pour les appareils mobiles et multilingues", link:'https://wet-boew.github.io/wet-boew/index-fr.html'},
    { label: 'BWB', value: 'Blue Water Bridge Canada'},
    { label: 'CA', value: 'Canadian Army'},
    { label: 'CAFC', value: 'Canada Firearms Centre'},
    { label: 'CanNor', value: 'Canadian Northern Economic Development Agency'},
    { label: 'CANSOFCOM', value: 'Canadian Special Operations Forces Command'},
    { label: 'CART', value: 'Canada Agricultural Review Tribunal'},
    { label: 'CAS', value: 'Courts Administration Service'},
    { label: 'CATSA', value: 'Canadian Air Transport Security Authority'},
    { label: 'CB', value: 'Copyright Board Canada'},
    { label: 'CBC', value: 'CBC/Radio-Canada'},
    { label: 'CBSA', value: 'Canada Border Services Agency'},
    { label: 'CBSO', value: 'Cloud-based Service Owner'},
    { label: 'CCC', value: 'Canadian Commercial Corporation'},
    { label: 'CCCS', value: 'Canadian Centre for Cyber Security'},
    { label: 'CCG', value: 'Canadian Coast Guard'},
    { label: 'CCI', value: 'Canadian Conservation Institute'},
    { label: 'CCOHS', value: 'Canadian Centre for Occupational Health and Safety'},
    { label: 'CDC', value: 'Canadian Dairy Commission'},
    { label: 'CDEV', value: 'Canada Development Investment Corporation'},
    { label: 'CDIC', value: 'Canada Deposit Insurance Corporation'},
    { label: 'CDS', value: 'Canadian Digital Service', explanation: 'yours truly', link: 'https://digital.canada.ca'},
    { label: 'CED', value: 'Canada Economic Development for Quebec Regions'},
    { label: 'CEIC', value: 'Canada Employment Insurance Commission'},
    { label: 'Celery', explanation: 'A python library. Celery is an open source asynchronous task queue or job queue which is based on distributed message passing.', link: 'https://docs.celeryproject.org/en/stable/index.html'},
    { label: 'CER', value: 'Canada Energy Regulator'},
    { label: 'CFIA', value: 'Canadian Food Inspection Agency'},
     { label: 'CGC', value: 'Canadian Grain Commission'},
    { label: 'CGO', value: 'Canadian Coast Guard'},
    { label: 'CHIN', value: 'Canadian Heritage Information Network'},
    { label: 'CHRC', value: 'Canadian Human Rights Commission'},
    { label: 'CIB', value: 'Canada Infrastructure Bank'},
    { label: 'CICS', value: 'Canadian Intergovernmental Conference Secretariat'},
    { label: 'CIEC', value: 'Conflict of Interest and Ethics Commissioner (Office of the)'},
    { label: 'CIHR', value: 'Canadian Institutes of Health Research'},
    { label: 'CIO', value: 'Chief Information Officer'},
    { label: 'CIPO', value: 'Canadian Intellectual Property Office'},
    { label: 'CIRB', value: 'Canada Industrial Relations Board'},
    { label: 'CIRNAC', value: 'Crown-Indigenous Relations and Northern Affairs Canada'},
    { label: 'CIS', value: 'Centre for Internet Security'},
    { label: 'CITT', value: 'Canadian International Trade Tribunal'},
    { label: 'CJC', value: 'Canadian Judicial Council'},
    { label: 'CLC', value: 'Canada Lands Company Limited'},
    { label: 'CMAC', value: 'Court Martial Appeal Court of Canada'},
    { label: 'CMH', value: 'Canadian Museum of History'},
    { label: 'CMHC', value: 'Canada Mortgage and Housing Corporation'},
    { label: 'CMHR', value: 'Canadian Museum for Human Rights'},
    { label: 'CMIP', value: 'Canadian Museum of Immigration at Pier 21'},
    { label: 'CMN', value: 'Canadian Museum of Nature'},
    { label: 'CNSC', value: 'Canadian Nuclear Safety Commission'},
    { label: 'COBU', value: 'Competition Bureau Canada'},
    { label: 'CPC', value: 'Canada Post'},
    { label: 'CPC', value: 'Canadian Police College'},
    { label: 'CPMA', value: 'Canadian Pari-Mutuel Agency'},
    { label: 'CPP-D', value: 'Canada Pension Plan Disability'},
    { label: 'CPP', value: 'Canada Pension Plan'},
    { label: 'CPPIB', value: 'Canada Pension Plan Investment Board'},
    { label: 'CRA', value: 'Canada Revenue Agency'},
    { label: 'CRC', value: 'Communications Research Centre Canada'},
    { label: 'CRCC', value: 'Civilian Review and Complaints Commission for the RCMP'},
    { label: 'CRRF', value: 'Canadian Race Relations Foundation'},
    { label: 'CRTC', value: 'Canadian Radio-Television and Telecommunications Commission'},
    { label: 'CSA', value: 'Canadian Space Agency'},
    { label: 'CSC', value: 'Correctional Service Canada'},
    { label: 'CSE', value: 'Communications Security Establishment'},
    { label: 'CSEC', value: 'Communications Security Establishment Canada'},
    { label: 'CSEMP', value: 'Cyber Security Event Management Plan'},
    { label: 'CSIS', value: 'Canadian Security Intelligence Service'},
    { label: 'CSP', value: 'Cloud Service Provider'},
    { label: 'CSPS', value: 'Canada School of Public Service'},
    { label: 'CSS', value: 'Corporate Services Sector'},
    { label: 'CTA', value: 'Canadian Transportation Agency'},
    { label: 'DC', value: 'Destination Canada'},
    { label: 'DCC', value: 'Defence Construction Canada'},
    { label: 'DFO', value: 'Department Fisheries and Oceans'},
    { label: 'DG', value: 'Director General'},
    { label: 'DM', value: 'Deputy Minister', explanation:'highest non-political level', link:"https://www.canada.ca/en/privy-council/services/publications/guidance-deputy-ministers.html#TOC1_4"},
    { label: 'DND', value: 'Department of National Defence', link:"https://www.canada.ca/en/department-national-defence.html"},
    { label: 'DRDC', value: 'Defence Research and Development Canada'},
    { label: 'DTO', value: 'Digital Transformation Office'},
    { label: 'EARB', value: 'Enterprise architecture review board'},
    { label: 'ECCC', value: 'Environment and Climate Change Canada'},
    { label: 'ECLR', value: 'Employment Conditions and Labour Relations'},
    { label: 'EDC', value: 'Export Development Canada'},
    { label: 'ELB', value: 'Elastic Load Balancer', explanation:'an AWS service', link:"https://aws.amazon.com/elasticloadbalancing/"},
    { label: 'Elections', value: 'Elections Canada'},
    { label: 'EPRC', value: 'Environmental Protection Review Canada'},
    { label: 'ERC', value: 'Royal Canadian Mounted Police External Review Committee'},
    { label: 'ESDC', value: 'Employment and Social Development Canada'},
    { label: 'FBCL', value: 'Federal Bridge Corporation'},
    { label: 'FC', value: 'Federal Court of Canada'},
    { label: 'FCA', value: 'Federal Court of Appeal'},
    { label: 'FCAC', value: 'Financial Consumer Agency of Canada'},
    { label: 'FCC', value: 'Farm Credit Canada'},
    { label: 'FES', value: 'Fall Economic Statement', explanation:"The budget, usually tabled early in the year, is generally preceded in the fall by another major statement, the Fall Economic Statement.", link:"https://www.canada.ca/en/department-finance/services/publications/fall-economic-statement.html"},
    { label: 'FFMC', value: 'Freshwater Fish Marketing Corporation'},
    { label: 'FIN', value: 'Finance Canada (Department of)'},
    { label: 'FINTRAC', value: 'Financial Transactions and Reports Analysis Centre of Canada'},
    { label: 'FIP', value: 'Federal Identity Program'},
    { label: 'FJA', value: 'Commissioner for Federal Judicial Affairs Canada (Office of the)'},
    { label: 'Float', value: 'Resource Planning & Management Software'},
    { label: 'Form 9200', explanation: "Requisition for Goods and Services and Construction form"},
    { label: 'FPCC', value: 'Farm Products Council of Canada'},
    { label: 'FTP', value: 'federal / provincial / territorial'},
    { label: 'GAC', value: 'Global Affairs Canada'},
    { label: 'GC', value: 'Government of Canada'},
    { label: 'GCcollab', value: 'collaboration platform', explanation:"GCcollab is open to students and academics from all Canadian universities and colleges as well as federal, provincial, territorial and municipal public servants. GCcollab is a major step toward a more innovative, open, and collaborative way of identifying, exploring and co-creating the policy and research agendas.", link:"https://gccollab.ca/"},
    { label: 'GCconnex ', value: 'Online messaging board', explanation:"GCconnex is a professional networking and collaborative workspace for all public servants, allowing them to connect and share information, leveraging the power of networking towards a more effective and efficient public service.",link:"https://gcconnex.gc.ca/login"},
    { label: 'GCKey', value: 'Single Sign On attempt by the Office of the CIO within TBS'},
    { label: 'GCMessage', value: 'the instant messaging beta product from the Digital Enablement team at TBS', link:"https://message.gccollab.ca/"},
    { label: 'GCMS', value: 'Global Case Management System', explanation:"The Global Case Management System (GCMS) is Citizenship and Immigration Canada’s (CIC’s) single, integrated and worldwide system used internally to process applications for citizenship and immigration services."},
    { label: 'GCWiki', explanation: 'The GCwiki is a public wiki hosted by the Government of Canada to facilitate collaboration and knowledge sharing.', link:"https://wiki.gccollab.ca/"},
    { label: 'GDS', value: 'The UK Government Digital Service', explanation: 'The Government Digital Service is a unit of the Government of the United Kingdom\'s Cabinet Office tasked with transforming the provision of online public services.'},
    { label: 'GLPA', value: 'Great Lakes Pilotage Authority Canada'},
    { label: 'GR', value: 'Government relations (lobbyists)' },
    { label: 'HC', value: 'Health Canada'},
    { label: 'HC', value: 'Health Canada'},
    { label: 'HFA', value: 'Heads of Federal Agencies', link:'https://www.canada.ca/en/privy-council/services/publications/guide-book-heads-agencies-operations-structures-responsibilities-federal-government.html'},
    { label: 'HRD', value: 'Human Resource Division'},
    { label: 'HRTC', value: 'Human Rights Tribunal of Canada'},
    { label: 'HSMBC', value: 'Historic Sites and Monuments Board of Canada'},
    { label: 'IAAC', value: 'Impact Assessment Agency of Canada'},
    { label: 'iATO', value: 'Interim Authority To Operate', explanation:"See ATO"},
    { label: 'IDRC', value: 'International Development Research Centre'},
    { label: 'IGA', value: 'Intergovernmental Affairs'},
    { label: 'IITB', value: 'Innovation Information and Technology Branch', explanation: 'IT arm of ESDC'},
    { label: 'INAC', value: 'Indigenous and Northern Affairs Canada'},
    { label: 'INFC', value: 'Infrastructure Canada'},
    { label: 'Investments', value: 'Public Sector Pension Investment Board	PSP'},
    { label: 'IRB', value: 'Immigration and Refugee Board of Canada'},
    { label: 'IRCC', value: 'Immigration, Refugees and Citizenship Canada'},
    { label: 'IRPDA', value: 'Independent Review Panel for Defence Acquisition'},
    { label: 'ISC', value: 'Indigenous Services Canada'},
    { label: 'ISED', value: 'Innovation, Science and Economic Development Canada'},
    { label: 'ITO', value: 'Industrial Technologies Office'},
    { label: 'JCCBI', value: 'Jacques Cartier and Champlain Bridges'},
    { label: 'JUS', value: 'Justice Canada (Department of)'},
    { label: 'k8s', value: 'Kubernetes', explanation:'Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.'},
    { label: 'LAC', value: 'Library and Archives Canada'},
    { label: 'LEEP', value: 'Local Energy Efficiency Partnerships'},
    { label: 'LPA', value: 'Laurentian Pilotage Authority Canada'},
    { label: 'MarineAtlantic', value: 'Marine Atlantic'},
    { label: 'MC', value: 'Measurement Canada'},
    { label: 'MC', value: 'Memorandum to Cabinet', explanation: 'The MC focuses on the policy rationale for a new or renewed policy or program initiative'},
    { label: 'MGERC', value: 'Military Grievances External Review Committee'},
    { label: 'Micromission', value: '3-6 months work assignment. Micromission usually comes from other GC department ie secondment'},
    { label: 'MINO', value: "Minister's Office"},
    { label: 'Mint', value: 'Royal Canadian Mint'},
    { label: 'MOU', value: 'Memorandum of Understanding', explanation: 'An agreement between departments for timed collaboration.'},
    { label: 'MPCC', value: 'Military Police Complaints Commission of Canada'},
    { label: 'NAC', value: 'National Arts Centre'},
    { label: 'NBC', value: 'National Battlefields Commission'},
    { label: 'NCC', value: 'National Capital Commission'},
    { label: 'NFB', value: 'National Film Board'},
    { label: 'NGC', value: 'National Gallery of Canada'},
    { label: 'NPA', value: 'Northern Pipeline Agency Canada'},
    { label: 'NRC', value: 'National Research Council Canada'},
    { label: 'NRCan', value: 'Natural Resources Canada'},
    { label: 'NSERC', value: 'Natural Sciences and Engineering Research Canada'},
    { label: 'NSICOP', value: 'Secretariat of the National Security and Intelligence Committee of Parliamentarians'},
    { label: 'NSIRA', value: 'National Security and Intelligence Review Agency'},
    { label: 'OAG', value: 'Auditor General of Canada (Office of the)'},
    { label: 'OCHRO', value: 'Office of the Chief Human Resources Officer'},
    { label: 'OCIF', value: 'Online Contract Information Form'},
    { label: 'OCIO', value: 'Office of the Chief Information Officer'},
    { label: 'OCL', value: 'Commissioner of Lobbying of Canada (Office of the)'},
    { label: 'OCMJ', value: 'Office of the Chief Military Judge'},
    { label: 'OCOL', value: 'Commissioner of Official Languages (Office of the)'},
    { label: 'ODS', value: 'Ontario Digital Service'},
    { label: 'OFOVC', value: 'Federal Ombudsman for Victims Of Crime (Office of the)'},
    { label: 'OGD', value: 'other government department'},
    { label: 'OHSTC', value: 'Occupational Health and Safety Tribunal Canada'},
    { label: 'OIC', value: 'Information Commissioner (Office of the)'},
    { label: 'OKR', value: 'objective and key result'},
    { label: 'Ontario', value: 'Federal Economic Development Agency for Southern Ontario	FedDev'},
    { label: 'OPC', value: 'Privacy Commissioner of Canada (Office of the)'},
    { label: 'OPO', value: 'Procurement Ombudsman (Office of the)'},
    { label: 'OSB', value: 'Superintendent of Bankruptcy Canada (Office of the)'},
    { label: 'OSFI', value: 'Superintendent of Financial Institutions Canada (Office of the)'},
    { label: 'OSGG', value: 'Governor General of Canada'},
    { label: 'OSS', value: 'open-source software'},
    { label: 'OTO', value: 'Taxpayers Ombudsperson (Office of the)'},
    { label: 'PBC', value: 'Parole Board of Canada'},
    { label: 'PBMM', value: 'Protected B, Medium Integrity, Medium Availability'},
    { label: 'PC', value: 'Parks Canada'},
    { label: 'PCH', value: 'Canadian Heritage'},
    { label: 'PCO', value: 'Privy Council Office', explanation:" PCO is staffed with non-partisan, career public servants, and functions in an \"operationally oriented, yet politically sensitive fashion\"."},
    { label: 'PCRA', value: 'Project Complexity and Risk Assessment', explanation:"Questionnaire for GC projects to assess project risks, such as strategic project, HR, project requirements, procurement, etc.", link:"https://www.canada.ca/en/treasury-board-secretariat/services/information-technology-project-management/project-management/project-complexity-risk-assessment-tool.html"},
    { label: 'PeopleSoft', explantion: "Employees use Phoenix self-service to view personal information, enter time and request leave."},
    { label: 'PF', value: 'Progression Framework', explanation: "Performance management and feedback framework for evaluating performance and communicating expectations to CDS employees. Every community at CDS has one, but all share the same five core competencies.", link:"https://docs.google.com/document/d/1fFXGg_aeE95dDTz3VRBprqNhNwZEeBIY41VTEZjOMGk/edit"},
    { label: 'PHAC', value: 'Public Health Agency of Canada', explanation:"he Public Health Agency of Canada empowers Canadians to improve their health. In partnership with others, its activities focus on preventing disease and injuries, promoting good physical and mental health, and providing information to support informed decision making. It values scientific excellence and provides national leadership in response to public health threats."},
    { label: 'PM', value: 'Prime Minister'},
    { label: 'PMA', value: 'Performance Management Agreement'},
    { label: 'PMO', value: "Prime Minister's Office", explanation:"The PMO is a staff unit that supports the Prime Minister in his activities as leader of the political party forming the Government. Staff of the PMO are appointed on a partisan basis, and operate in a \"politically oriented, yet operationally sensitive fashion\""},
    { label: 'PMPRB', value: 'Patented Medicine Prices Review Board Canada'},
    { label: 'POLAR', value: 'Polar Knowledge Canada'},
    { label: 'POR', value: 'public opinion research'},
    { label: 'PPA', value: 'Pacific Pilotage Authority Canada'},
    { label: 'PPSC', value: 'Public Prosecution Service of Canada'},
    { label: 'PRI', value: 'personal record identifier'},
    { label: 'PS', value: 'Public Safety Canada'},
    { label: 'PSC', value: 'Public Service Commission of Canada'},
    { label: 'PSDPTC', value: 'Public Servants Disclosure Protection Tribunal Canada'},
    { label: 'PSIC', value: 'Public Sector Integrity Commissioner of Canada (Office of the)'},
    { label: 'PSLREB', value: 'Public Service Labour Relations and Employment Board'},
    { label: 'PSPC', value: 'Public Services and Procurement Canada'},
    { label: 'PSPM', value: 'Public Service Performance Management'},
    { label: 'Qualitative research', explanation: "Qualitative research involves collecting and analyzing non-numerical data (e.g., text, video, or audio) to understand concepts, opinions, or experiences. So most of our \"user research\" is focused on truth derived from how people describe their own experience and interaction with a product/service"},
    { label: 'Quantitative research', explanation: "Quantitative research is the process of collecting and analyzing numerical data. It can be used to find patterns and averages, make predictions, test causal relationships, and generalize results to wider populations."},
    { label: 'RCAF', value: 'Royal Canadian Air Force'},
    { label: 'RCMP', value: 'Royal Canadian Mounted Police'},
    { label: 'RCMP', value: 'Royal Canadian Mounted Police'},
    { label: 'RCN', value: 'Royal Canadian Navy'},
    { label: 'RMCC', value: 'Royal Military College of Canada'},
    { label: 'SA&A', value: 'Security assessment and authorization', explanation: "The structured process through which services are assessed and authorized to operate"},
    { label: 'SC', value: 'Service Canada'},
    { label: 'SCC-CCN', value: 'Standards Council of Canada'},
    { label: 'SCC', value: 'Supreme Court of Canada'},
    { label: 'SCIF', value: 'Sensitive Compartmented Information Facility', explanation: "pronounced \"skiff\", s an enclosed area within a building that is used to process Sensitive Compartmented Information (SCI) types of classified information."},
    { label: 'SCMA', value: 'Strategic Communications and Ministerial Affairs'},
    { label: 'SCT', value: 'Registry of the Specific Claims Tribunal of Canada'},
    { label: 'ServCan', value: 'Service Canada'},
    { label: 'SFT', value: 'Speech from the Throne', link:"https://www.canada.ca/en/privy-council/campaigns/speech-throne/info-speech-from-throne.html"},
    { label: 'SO', value: 'Treasury Board Secretary’s Office'},
    { label: 'SOAR', value: 'Statement of Acceptable Risk', explanation: "This documents all the risks identified during a risk threat assessment, their ratings and planned treatment."},
    { label: 'SOMC', value: 'statement of merit criteria', explanation:"With every Federal job poster comes what's called a Statement of Merit Criteria (SOMC). This is the part of the job poster that clearly lays out all of the essential qualifications, asset qualifications, operational requirements, knowledge requirements and abilities"},
    { label: 'SOP', value: 'Standard Operating Procedures'},
    { label: 'SOS', value: 'Statement of Sensitivity', explanation:"This is typically filled in by the policy and security team members and outlines the sensitivity of the data (Unclassified, Protected A, Protected B, ...)"},
    { label: 'SOW', value: 'Statement of Work'},
    { label: 'SRCL', value: 'Security Requirements Check List', link:'https://www.tbs-sct.gc.ca/tbsf-fsct/350-103-eng.asp'},
    { label: 'SRTM', value: 'Security Requirement Traceability Matrix'},
    { label: 'SSC', value: 'Shared Services Canada', explanation: "Shared Services Canada is an agency of the Government of Canada responsible for providing and consolidating information technology services across federal government departments. It was established in 2011 to combine services such as email and data storage that were at the time duplicated by each agency." },
    { label: 'SSHRC', value: 'Social Sciences and Humanities Research Council of Canada'},
    { label: 'SST', value: 'Social Security Tribunal of Canada'},
    { label: 'StatCan', value: 'Statistics Canada'},
    { label: 'STT', value: 'Show The Things', explanation: "Bi-Weekly All Staff CDS Showcases"},
    { label: 'TATC', value: 'Transportation Appeal Tribunal of Canada'},
    { label: 'TB', value: 'Translation Bureau'},
    { label: 'TBS Audit Committee', explanation: "The TBS Audit Committee advises on matters related to governance, risk and controls, and it serves as a strategic advisory board for key TBS initiatives."},
    { label: 'TBS', value: 'Treasury Board of Canada Secretariat'},
    { label: 'TBSub', value: 'Treasury Board (TB) submissions', explanation:'A TB submission, focuses primarily on program implementation, detailed costing information, results and outcomes. A submission outlines how the policy rationale and objectives are transformed into an initiative or program that will achieve those objectives'},
    { label: 'TC', value: 'Transport Canada'},
    { label: 'TCC', value: 'Tax Court of Canada'},
    { label: 'TCS', value: 'Canadian Trade Commissioner Service'},
    { label: 'TFWP', value: 'Temporary Foreign Worker Program'},
    { label: 'TSB', value: 'Transportation Safety Board of Canada'},
    { label: 'VAC', value: 'Veterans Affairs Canada'},
    { label: 'VMC', value: 'Virtual Museum of Canada'},
    { label: 'VRAB', value: 'Veterans Review and Appeal Board'},
    { label: 'WAGE', value: 'Women and Gender Equality Canada'},
    { label: 'WD', value: 'Western Economic Diversification Canada'},
    { label: 'WDBA', value: 'Windsor-Detroit Bridge Authority'},
    { label: 'WET', value: 'Web Experience Toolkit', explanation:'front-end framework for building websites, collaborative open source project led by the Government of Canada', link:'https://wet-boew.github.io/wet-boew/index-en.html'},
    { label: 'YOUTH', value: 'Youth'}



];
