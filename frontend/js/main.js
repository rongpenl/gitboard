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
    capstone1_repo: null,
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
    capstone1_repo: null,
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

function fetchCap1Repo() {
  for (var i = 0; i < lax3Students.length; i++) {
    var student = lax3Students[i];
    // fetch repo information
    if (student["capstone1_repo"] != null) {
      var url =
        repoEndpoint + student["github_id"] + "/" + student["capstone1_repo"];
      var commitUrl = url + "/commits";
      var repoName = student["capstone1_repo"];
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          res.repoName = repoName;
          cap1RepoInfo.push(res);
        });
      fetch(commitUrl)
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

function populateProject() {
  var projectTableContainer = document.getElementById(
    "project-table-container"
  );
  var projectTable = document.createElement("table");
  projectTable.setAttribute("data-vertable", "ver5");
  projectTableContainer.appendChild(projectTable);
  //   populate project table head
  // html-url, language, user avator, student name, student git name,
  // last push time, last update time
  var projectTableHeader = document.createElement("thead");

  fetchCap1Repo();

  //   populate project table body
}
