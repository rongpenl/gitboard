const githubUsers = [
  {
    name: "Aydin Hasanli",
    github_id: "aydin-hasanli",
    linkedin_id: "aydin-hasanli",
    current_project_repo: "age_gender_prediction",
    campus: "LAX"
  },
  {
    name: "Evgeny Grobov",
    github_id: "evgenygrobov",
    linkedin_id: "egrobov",
    current_project_repo: "Customer-churn-prediction",
    campus: "LAX"
  },
  {
    name: "Joshua Chow",
    github_id: "thejoshchow",
    linkedin_id: "thejoshchow",
    current_project_repo: "ttc",
    campus: "LAX"
  },
  {
    name: "Kacie Webster",
    github_id: "kaciewebster",
    linkedin_id: "kacie-webster",
    current_project_repo: "nba-player-analysis",
    campus: "LAX"
  },
  {
    name: "Mary MacCarthy",
    github_id: "marymac17",
    linkedin_id: "mary-maccarthy",
    current_project_repo: "tweetanalysis_vaccines",
    campus:"LAX"
  },
  {
    name: "Opa Towobola",
    github_id: "CarveTheFuture",
    linkedin_id: "carvethefuture",
    current_project_repo: "Forecasting",
    campus: "LAX"
  },
  {
    name: "Zi Yang",
    github_id: "zyang0009",
    linkedin_id:"zidawnyang",
    current_project_repo: "dsicapstone2",
    campus: "LAX"
  },
  {
    name: "Ron Li",
    github_id: "rongpenl",
    linkedin_id:"ron-li-6531bb1b7",
    current_project_repo: "gitboard",
    campus: "LAX"
  },
];

const linkedinEndpoint = "https://www.linkedin.com/in/";

const repoEndpoint = "https://api.github.com/repos/";

const userEndpoint = "https://api.github.com/users/";

const twitterEndpoint = "https://twitter.com/";

const githubEndpoint = "https://www.github.com/";

const projectColNames = [
  "Creator",
  "GitHub User",
  "Latest Update",
  "Latest Commit",
  "Total Commits",
  "Programming Language",
  "Number of Opened Issues",
];

const profileColNames = [
  "Data Scientist Name",
  "Location",
  "Bio",
  "Twitter UserName",
  "Public Repos",
  "Total Followers",
  "Total Stars",
  "Last Active Time",
];
