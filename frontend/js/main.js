//global variables prefetched
var lax3Students = [
  {
    name: "Aydin Hasanli",
    github_id: "aydin-hasanli",
    capstone1_repo: "Tracking-the-Sun",
  },
  {
    name: "Evgeny Grobov",
    github_id: "evgenygrobov",
    capstone1_repo: "AIRBNB_NYC",
  },
  {
    name: "Joshua Chow",
    github_id: "thejoshchow",
    capstone1_repo: "coffee-arabica",
  },
  {
    name: "Kacie Webster",
    github_id: "kaciewebster",
    capstone1_repo: "ca-fire-incidents",
  },
  {
    name: "Mary MacCarthy",
    github_id: "marymac17",
    capstone1_repo: "capstone_one-",
  },
  {
    name: "Opa Towobola",
    github_id: "CarveTheFuture",
    capstone1_repo: "TrendsInEnergyDevelopmentAndHealth",
  },
  {
    name: "Zi Yang",
    github_id: "zyang0009",
    capstone1_repo: "DSIcap1HorsinAround",
  },
];

var repoEndpoint = "https://api.github.com/repos/";
var userEndpoint = "https://api.github.com/users/";

projectColNames = [
  "Creator",
  "GitHub User",
  "Latest Update",
  "Latest Commit",
  "Total Commits",
  "Programming Language",
  "Number of Opened Issues",
];

profileColNames = [
  "Data Scientist Name",
  "Location",
  "Bio",
  "Twitter UserName",
  "Public Repos",
  "Total Followers",
  "Latest Active Time",
];

var cap1RepoInfo = [];
var cap1RepoCommits = [];
var githubprofileInfo = [];

async function fetchData() {
  for (var i = 0; i < lax3Students.length; i++) {
    var student = lax3Students[i];
    // fetch repo information
    if (student["capstone1_repo"] != null) {
      var url =
        repoEndpoint + student["github_id"] + "/" + student["capstone1_repo"];
      var commitUrl = url + "/commits";
      var userUrl = userEndpoint + student["github_id"];
      var repoName = student["capstone1_repo"];
      // user information
      await fetch(userUrl)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          githubprofileInfo.push(res);
        });

      // repo information
      await fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          cap1RepoInfo.push(res);
        });
      // commit information
      await fetch(commitUrl)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          cap1RepoCommits.push(res);
        });
    }
  }
}

(function ($) {
  "use strict";
  $(".column100").on("mouseover", function () {
    var table1 = $(this).parent().parent().parent();
    var table2 = $(this).parent().parent();
    var verTable = $(table1).data("vertable") + "";
    var column = $(this).data("column") + "";

    $(table2)
      .find("." + column)
      .addClass("hov-column-" + verTable);
    $(table1)
      .find(".row100.head ." + column)
      .addClass("hov-column-head-" + verTable);
  });

  $(".column100").on("mouseout", function () {
    var table1 = $(this).parent().parent().parent();
    var table2 = $(this).parent().parent();
    var verTable = $(table1).data("vertable") + "";
    var column = $(this).data("column") + "";

    $(table2)
      .find("." + column)
      .removeClass("hov-column-" + verTable);
    $(table1)
      .find(".row100.head ." + column)
      .removeClass("hov-column-head-" + verTable);
  });
})(jQuery);

function populateProfile() {
  var profileTableContainer = document.getElementById(
    "profile-table-container"
  );
  var profileTable = document.createElement("table");
  profileTable.setAttribute("data-vertable", "ver5");
  profileTableContainer.appendChild(profileTable);
  createProfileHeader(profileTable);
  createProfileBody(profileTable);
}

function createProfileHeader(profileTable) {
  var profileTableheader = document.createElement("thead");
  profileTable.appendChild(profileTableheader);
  // append header row
  headerRow = document.createElement("tr");
  headerRow.setAttribute("class", "row100 head");
  profileTableheader.appendChild(headerRow);
  // header row
  emptyHeaderCell = document.createElement("th");
  emptyHeaderCell.setAttribute("class", "column100 column1");
  emptyHeaderCell.setAttribute("data-column", "column1");
  headerRow.appendChild(emptyHeaderCell);
  for (var i = 0; i < profileColNames.length; i++) {
    headerCell = document.createElement("th");
    class_ = "column100 column" + String(i + 2);
    column_ = "column" + String(i + 2);
    headerCell.setAttribute("class", class_);
    headerCell.setAttribute("data-column", column_);
    headerRow.appendChild(headerCell);
    headerCell.innerHTML = profileColNames[i];
  }
}

function createProfileBody(profileTable) {
  var profileTableBody = document.createElement("tbody");
  profileTable.appendChild(profileTableBody);
  // create project info row by row
  for (var i = 0; i < lax3Students.length; i++) {
    // create a row
    var dataRow = document.createElement("tr");
    profileTableBody.appendChild(dataRow);
    dataRow.setAttribute("class", "row100");
    // student name
    var studentNameCell = document.createElement("td");
    studentNameCell.setAttribute("class", "column100 column1");
    studentNameCell.setAttribute("data-column", "column1");
    studentNameCell.innerHTML = capString(githubprofileInfo[i]["login"]);
    dataRow.appendChild(studentNameCell);

    //  append each column cell
    for (var j = 0; j < profileColNames.length; j++) {
      dataCell = document.createElement("td");
      class_ = "column100 column" + String(j + 2);
      column_ = "column" + String(j + 2);
      dataCell.setAttribute("class", class_);
      dataCell.setAttribute("data-column", column_);
      dataRow.append(dataCell);
      switch (j) {
        // Data Science Name
        case 0:
          dataCell.innerHTML = lax3Students[i]["name"];
          break;
        //Location
        case 1:
          dataCell.innerHTML = githubprofileInfo[i]["location"];
          break;
        // Bio
        case 2:
          var bio = githubprofileInfo[i]["bio"];
          dataCell.innerHTML = capString(bio);
          break;
        // Twitter user name
        case 3:
          var twitterUsername = githubprofileInfo[i]["twitter_username"];
          dataCell.innerHTML = twitterUsername;
          break;
        // Public Repos
        case 4:
          var totalPubRepo = githubprofileInfo[i]["public_repos"];
          dataCell.innerHTML = totalPubRepo;
          break;
        //Total Followers
        case 5:
          var followers = githubprofileInfo[i]["followers"];
          dataCell.innerHTML = followers;
          break;
        // Latest Activity Time
        case 6:
          var lastUpdateTime = new Date(githubprofileInfo[i]["updated_at"]);
          dataCell.innerHTML = lastUpdateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
          });
          break;
      }
    }
  }
}

async function populateProject() {
  // fetch repo information on start
  var projectTableContainer = document.getElementById(
    "project-table-container"
  );
  var projectTable = document.createElement("table");
  projectTable.setAttribute("data-vertable", "ver5");
  projectTableContainer.appendChild(projectTable);
  createCapHeader(projectTable);
  createCapBody(projectTable);
}

function createCapHeader(projectTable) {
  var projectTableHeader = document.createElement("thead");
  projectTable.appendChild(projectTableHeader);
  // append header row
  headerRow = document.createElement("tr");
  headerRow.setAttribute("class", "row100 head");
  projectTableHeader.appendChild(headerRow);
  // header row
  emptyHeaderCell = document.createElement("th");
  emptyHeaderCell.setAttribute("class", "column100 column1");
  emptyHeaderCell.setAttribute("data-column", "column1");
  headerRow.appendChild(emptyHeaderCell);
  for (var i = 0; i < projectColNames.length; i++) {
    headerCell = document.createElement("th");
    class_ = "column100 column" + String(i + 2);
    column_ = "column" + String(i + 2);
    headerCell.setAttribute("class", class_);
    headerCell.setAttribute("data-column", column_);
    headerRow.appendChild(headerCell);
    headerCell.innerHTML = projectColNames[i];
  }
}

function createCapBody(projectTable) {
  var projectTableBody = document.createElement("tbody");
  projectTable.appendChild(projectTableBody);
  // create project info row by row
  for (var i = 0; i < lax3Students.length; i++) {
    // create a row
    var dataRow = document.createElement("tr");
    projectTableBody.appendChild(dataRow);
    dataRow.setAttribute("class", "row100");
    // repo name
    var repoNameCell = document.createElement("td");
    repoNameCell.setAttribute("class", "column100 column1");
    repoNameCell.setAttribute("data-column", "column1");
    repoNameCell.innerHTML = capString(cap1RepoInfo[i]["name"]);
    dataRow.appendChild(repoNameCell);

    //  append each column cell
    for (var j = 0; j < projectColNames.length; j++) {
      dataCell = document.createElement("td");
      class_ = "column100 column" + String(j + 2);
      column_ = "column" + String(j + 2);
      dataCell.setAttribute("class", class_);
      dataCell.setAttribute("data-column", column_);
      dataRow.append(dataCell);
      // TODO
      switch (j) {
        // Creator
        case 0:
          dataCell.innerHTML = lax3Students[i]["name"];
          break;
        //GitHub User
        case 1:
          dataCell.innerHTML = lax3Students[i]["github_id"];
          break;
        // Latest Update Time
        case 2:
          var lastUpdateTime = new Date(cap1RepoInfo[i]["pushed_at"]);
          dataCell.innerHTML = lastUpdateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
          });
          break;
        // Latest Commit Message
        case 3:
          var lastCommit = cap1RepoCommits[i][0]["commit"]["message"];
          dataCell.innerHTML = capString(lastCommit);
          break;
        // total commit
        case 4:
          var totalCommit = cap1RepoCommits[i].length;
          dataCell.innerHTML = totalCommit;
          break;
        case 5:
          var language = cap1RepoInfo[i]["language"];
          dataCell.innerHTML = language;
          break;
        case 6:
          var totalIssue = cap1RepoInfo[i]["open_issues_count"];
          dataCell.innerHTML = totalIssue;
          break;
      }
    }
  }
}

function capString(string) {
  if (string == null) {
    return "";
  }
  if (string.length > 20) {
    return string.slice(0, 20) + "...";
  } else {
    return string;
  }
}

async function main() {
  // session storage usage
  try {
    // test example
    if (JSON.parse(sessionStorage.getItem("githubProfile")) == null){
      throw Error("No cached data found")
    }
    else{
        githubprofileInfo = JSON.parse(sessionStorage.getItem("githubProfile"));
        cap1RepoCommits = JSON.parse(sessionStorage.getItem("cap1Commits"));
        cap1RepoInfo = JSON.parse(sessionStorage.getItem("cap1Info"));
    }
  } catch(err) {
    console.log(err);
    await fetchData();
    sessionStorage.setItem("githubProfile", JSON.stringify(githubprofileInfo));
    sessionStorage.setItem("cap1Commits", JSON.stringify(cap1RepoCommits));
    sessionStorage.setItem("cap1Info", JSON.stringify(cap1RepoInfo));
  }
  populateProfile();
  populateProject();
}
