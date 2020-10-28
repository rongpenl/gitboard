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

var cap1RepoInfo = [];
var cap1RepoCommits = [];

async function fetchCap1Repo() {
  for (var i = 0; i < lax3Students.length; i++) {
    var student = lax3Students[i];
    // fetch repo information
    if (student["capstone1_repo"] != null) {
      var url =
        repoEndpoint + student["github_id"] + "/" + student["capstone1_repo"];
      var commitUrl = url + "/commits";
      var repoName = student["capstone1_repo"];
      await fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          res.repoName = repoName;
          cap1RepoInfo.push(res);
        });
      await fetch(commitUrl)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          res.repoName = repoName;
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
}
async function populateProject() {
  // fetch repo information on start
  await fetchCap1Repo();
  var projectTableContainer = document.getElementById(
    "project-table-container"
  );
  var projectTable = document.createElement("table");
  projectTable.setAttribute("data-vertable", "ver5");
  projectTableContainer.appendChild(projectTable);
  //   populate project table head
  // html-url, language, user avator, student name, student git name,
  // last push time, last update time

  createCapHeader(projectTable);
  createCapBody(projectTable);

  //   populate project table body
}

function createCapHeader(projectTable) {
  var projectTableHeader = document.createElement("thead");
  projectTable.appendChild(projectTableHeader);
  // append header row
  headerRow = document.createElement("tr");
  headerRow.setAttribute("class", "row100 head");
  projectTableHeader.appendChild(headerRow);
  // header row
  colNames = [
    "Creator",
    "GitHub User",
    "Latest Update Time",
    "Latest Commit Message",
    "Commits in 48 Hrs",
    "Programming Language",
    "#Open Issues",
  ];
  emptyHeaderCell = document.createElement("th");
  emptyHeaderCell.setAttribute("class", "column100 column1");
  emptyHeaderCell.setAttribute("data-column", "column1");
  headerRow.appendChild(emptyHeaderCell);
  for (var i = 0; i < colNames.length; i++) {
    headerCell = document.createElement("th");
    class_ = "column100 column" + String(i + 2);
    column_ = "column" + String(i + 2);
    headerCell.setAttribute("class", class_);
    headerCell.setAttribute("data-column", column_);
    headerRow.appendChild(headerCell);
    headerCell.innerHTML = colNames[i];
  }
}

function createCapBody(projectTable) {
  var projectTableBody = document.createElement("tbody");
  projectTable.appendChild(projectTableBody);
  // create project info row by row
  for (var i =0; i < lax3Students.length; i++){
// create a row
    var dataRow = document.createElement("tr");
    projectTableBody.appendChild(dataRow);
    dataRow.setAttribute("class","row100");
    // repo name
    var repoNameCell = document.createElement("td");
    repoNameCell.setAttribute("class", "column100 column1");
    repoNameCell.setAttribute("data-column", "column1");
    repoNameCell.innerHTML = cap1RepoInfo[i]["name"]
    dataRow.appendChild(repoNameCell);

    //  append each column cell
    for (var j =0; j< colNames.length + 1; j++){
      class_ = "column100 column" + String(i + 2);
      column_ = "column" + String(i + 2);
    }
  }
}
