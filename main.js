const url =
  "https://script.google.com/macros/s/AKfycbxSXWL-kZcyG8SghSABidUkMBWS67FSyqMZb5NU2_GhlkuGrjEWhBKj_do_Tuva9RDQ/exec";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
};

window.onload = fetchData(url, options);

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayData(data) {
  console.log(data);
  const today = new Date();
  
  // Atcoder
  var todayA = [];
  var totalARPS = 0, todayARPS = 0;
  var totalADS = 0, todayADS = 0;
  var totaldiffA = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var todaydiffA = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < data["AtCoder"].length; i++) {
    totalARPS += data["AtCoder"][i]["RP"];
    totalADS += data["AtCoder"][i]["difficulty"];
    totaldiffA[getColor(data["AtCoder"][i]["difficulty"])]++;
    const thisdate = new Date(data["AtCoder"][i]["date"]);
    if (today.toDateString() === thisdate.toDateString()) {
      todayA.push(data["AtCoder"][i]["problem_name"]);
      todayARPS += data["AtCoder"][i]["RP"];
      todayADS += data["AtCoder"][i]["difficulty"];
      todaydiffA[getColor(data["AtCoder"][i]["difficulty"])]++;
    }
  }

  const v100 = document.getElementById("100");
  var c100 = data["MasterValues"][20]["maxvalue"] + data["AtCoder"].length;
  v100.innerText = c100.toString();
  const v101 = document.getElementById("101");
  v101.innerText = "+" + todayA.length.toString();
  const v102 = document.getElementById("102");
  v102.style = "stroke-dasharray: " + (c100 / data["MasterValues"][0]["maxvalue"] * 100.0).toString() + ", 100;";
  const v200 = document.getElementById("200");
  v200.innerText = (data["MasterValues"][30]["maxvalue"] + totalARPS).toString();
  const v201 = document.getElementById("201");
  v201.innerText = "+" + todayARPS.toString();
  const v202 = document.getElementById("202");
  v202.innerText = "+" + todayADS.toString();
  const v300 = document.getElementById("300");
  const v301 = document.getElementById("301");
  const v302 = document.getElementById("302");
  var p000 = data["MasterValues"][21]["maxvalue"] + totaldiffA[0];
  v300.style.height = (p000 / data["MasterValues"][1]["maxvalue"] * 160).toString() + "px";
  v301.innerText = "+" + todaydiffA[0].toString();
  v302.style.top = (164 - p000 / data["MasterValues"][1]["maxvalue"] * 160).toString() + "px";
  v302.innerText = p000.toString();
  const v303 = document.getElementById("303");
  const v304 = document.getElementById("304");
  const v305 = document.getElementById("305");
  var p001 = data["MasterValues"][22]["maxvalue"] + totaldiffA[1];
  v303.style.height = (p001 / data["MasterValues"][2]["maxvalue"] * 160).toString() + "px";
  v304.innerText = "+" + todaydiffA[1].toString();
  v305.style.top = (164 - p001 / data["MasterValues"][2]["maxvalue"] * 160).toString() + "px";
  v305.innerText = p001.toString();
  const v306 = document.getElementById("306");
  const v307 = document.getElementById("307");
  const v308 = document.getElementById("308");
  var p002 = data["MasterValues"][23]["maxvalue"] + totaldiffA[2];
  v306.style.height = (p002 / data["MasterValues"][3]["maxvalue"] * 160).toString() + "px";
  v307.innerText = "+" + todaydiffA[2].toString();
  v308.style.top = (164 - p002 / data["MasterValues"][3]["maxvalue"] * 160).toString() + "px";
  v308.innerText = p002.toString();
  const v309 = document.getElementById("309");
  const v310 = document.getElementById("310");
  const v311 = document.getElementById("311");
  var p003 = data["MasterValues"][24]["maxvalue"] + totaldiffA[3];
  v309.style.height = (p003 / data["MasterValues"][4]["maxvalue"] * 160).toString() + "px";
  v310.innerText = "+" + todaydiffA[3].toString();
  v311.style.top = (164 - p003 / data["MasterValues"][4]["maxvalue"] * 160).toString() + "px";
  v311.innerText = p003.toString();
  const v312 = document.getElementById("312");
  const v313 = document.getElementById("313");
  const v314 = document.getElementById("314");
  var p004 = data["MasterValues"][25]["maxvalue"] + totaldiffA[4];
  v312.style.height = (p004 / data["MasterValues"][5]["maxvalue"] * 160).toString() + "px";
  v313.innerText = "+" + todaydiffA[4].toString();
  v314.style.top = (164 - p004 / data["MasterValues"][5]["maxvalue"] * 160).toString() + "px";
  v314.innerText = p004.toString();
  const v315 = document.getElementById("315");
  const v316 = document.getElementById("316");
  const v317 = document.getElementById("317");
  var p005 = data["MasterValues"][26]["maxvalue"] + totaldiffA[5];
  v315.style.height = (p005 / data["MasterValues"][6]["maxvalue"] * 160).toString() + "px";
  v316.innerText = "+" + todaydiffA[5].toString();
  v317.style.top = (164 - p005 / data["MasterValues"][6]["maxvalue"] * 160).toString() + "px";
  v317.innerText = p005.toString();
  const v318 = document.getElementById("318");
  const v319 = document.getElementById("319");
  const v320 = document.getElementById("320");
  var p006 = data["MasterValues"][27]["maxvalue"] + totaldiffA[6];
  v318.style.height = (p006 / data["MasterValues"][7]["maxvalue"] * 160).toString() + "px";
  v319.innerText = "+" + todaydiffA[6].toString();
  v320.style.top = (164 - p006 / data["MasterValues"][7]["maxvalue"] * 160).toString() + "px";
  v320.innerText = p006.toString();
  const v321 = document.getElementById("321");
  const v322 = document.getElementById("322");
  const v323 = document.getElementById("323");
  var p007 = data["MasterValues"][28]["maxvalue"] + totaldiffA[7];
  v321.style.height = (p007 / data["MasterValues"][8]["maxvalue"] * 160).toString() + "px";
  v322.innerText = "+" + todaydiffA[7].toString();
  v323.style.top = (164 - p007 / data["MasterValues"][8]["maxvalue"] * 160).toString() + "px";
  v323.innerText = p007.toString();
  const v324 = document.getElementById("324");
  const v325 = document.getElementById("325");
  const v326 = document.getElementById("326");
  var p008 = data["MasterValues"][29]["maxvalue"] + totaldiffA[8];
  v324.style.height = (p008 / data["MasterValues"][9]["maxvalue"] * 160).toString() + "px";
  v325.innerText = "+" + todaydiffA[8].toString();
  v326.style.top = (164 - p008 / data["MasterValues"][9]["maxvalue"] * 160).toString() + "px";
  v326.innerText = p008.toString();
  const v400 = document.getElementById("400");
  v400.innerText = todayA.join(", ");

  // OMC
  var todayO = [];
  var totalORPS = 0, todayORPS = 0;
  var totalODS = 0, todayODS = 0;
  var totaldiffO = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var todaydiffO = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < data["OMC"].length; i++) {
    totalORPS += data["OMC"][i]["RP"];
    totalODS += data["OMC"][i]["difficulty"];
    totaldiffO[getColor(data["OMC"][i]["difficulty"])]++;
    const thisdate = new Date(data["OMC"][i]["date"]);
    if (today.toDateString() === thisdate.toDateString()) {
      todayO.push(data["OMC"][i]["problem_name"]);
      todayORPS += data["OMC"][i]["RP"];
      todayODS += data["OMC"][i]["difficulty"];
      todaydiffO[getColor(data["OMC"][i]["difficulty"])]++;
    }
  }

  const v500 = document.getElementById("500");
  var c101 = data["MasterValues"][31]["maxvalue"] + data["OMC"].length;
  v500.innerText = c101.toString();
  const v501 = document.getElementById("501");
  v501.innerText = "+" + todayO.length.toString();
  const v502 = document.getElementById("502");
  v502.style = "stroke-dasharray: " + (c101 / data["MasterValues"][10]["maxvalue"] * 100.0).toString() + ", 100;";
  const v600 = document.getElementById("600");
  v600.innerText = (data["MasterValues"][41]["maxvalue"] + totalORPS).toString();
  const v601 = document.getElementById("601");
  v601.innerText = "+" + todayORPS.toString();
  const v602 = document.getElementById("602");
  v602.innerText = "+" + todayODS.toString();
  const v700 = document.getElementById("700");
  const v701 = document.getElementById("701");
  const v702 = document.getElementById("702");
  var p100 = data["MasterValues"][32]["maxvalue"] + totaldiffO[0];
  v700.style.height = (p100 / data["MasterValues"][11]["maxvalue"] * 160).toString() + "px";
  v701.innerText = "+" + todaydiffO[0].toString();
  v702.style.top = (164 - p100 / data["MasterValues"][11]["maxvalue"] * 160).toString() + "px";
  v702.innerText = p100.toString();
  const v703 = document.getElementById("703");
  const v704 = document.getElementById("704");
  const v705 = document.getElementById("705");
  var p101 = data["MasterValues"][33]["maxvalue"] + totaldiffO[1];
  v703.style.height = (p101 / data["MasterValues"][12]["maxvalue"] * 160).toString() + "px";
  v704.innerText = "+" + todaydiffO[1].toString();
  v705.style.top = (164 - p101 / data["MasterValues"][12]["maxvalue"] * 160).toString() + "px";
  v705.innerText = p101.toString();
  const v706 = document.getElementById("706");
  const v707 = document.getElementById("707");
  const v708 = document.getElementById("708");
  var p102 = data["MasterValues"][34]["maxvalue"] + totaldiffO[2];
  v706.style.height = (p102 / data["MasterValues"][13]["maxvalue"] * 160).toString() + "px";
  v707.innerText = "+" + todaydiffO[2].toString();
  v708.style.top = (164 - p102 / data["MasterValues"][13]["maxvalue"] * 160).toString() + "px";
  v708.innerText = p102.toString();
  const v709 = document.getElementById("709");
  const v710 = document.getElementById("710");
  const v711 = document.getElementById("711");
  var p103 = data["MasterValues"][35]["maxvalue"] + totaldiffO[3];
  v709.style.height = (p103 / data["MasterValues"][14]["maxvalue"] * 160).toString() + "px";
  v710.innerText = "+" + todaydiffO[3].toString();
  v711.style.top = (164 - p103 / data["MasterValues"][14]["maxvalue"] * 160).toString() + "px";
  v711.innerText = p103.toString();
  const v712 = document.getElementById("712");
  const v713 = document.getElementById("713");
  const v714 = document.getElementById("714");
  var p104 = data["MasterValues"][36]["maxvalue"] + totaldiffO[4];
  v712.style.height = (p104 / data["MasterValues"][15]["maxvalue"] * 160).toString() + "px";
  v713.innerText = "+" + todaydiffO[4].toString();
  v714.style.top = (164 - p104 / data["MasterValues"][15]["maxvalue"] * 160).toString() + "px";
  v714.innerText = p104.toString();
  const v715 = document.getElementById("715");
  const v716 = document.getElementById("716");
  const v717 = document.getElementById("717");
  var p105 = data["MasterValues"][37]["maxvalue"] + totaldiffO[5];
  v715.style.height = (p105 / data["MasterValues"][16]["maxvalue"] * 160).toString() + "px";
  v716.innerText = "+" + todaydiffO[5].toString();
  v717.style.top = (164 - p105 / data["MasterValues"][16]["maxvalue"] * 160).toString() + "px";
  v717.innerText = p105.toString();
  const v718 = document.getElementById("718");
  const v719 = document.getElementById("719");
  const v720 = document.getElementById("720");
  var p106 = data["MasterValues"][38]["maxvalue"] + totaldiffO[6];
  v718.style.height = (p106 / data["MasterValues"][17]["maxvalue"] * 160).toString() + "px";
  v719.innerText = "+" + todaydiffO[6].toString();
  v720.style.top = (164 - p106 / data["MasterValues"][17]["maxvalue"] * 160).toString() + "px";
  v720.innerText = p106.toString();
  const v721 = document.getElementById("721");
  const v722 = document.getElementById("722");
  const v723 = document.getElementById("723");
  var p107 = data["MasterValues"][39]["maxvalue"] + totaldiffO[7];
  v721.style.height = (p107 / data["MasterValues"][18]["maxvalue"] * 160).toString() + "px";
  v722.innerText = "+" + todaydiffO[7].toString();
  v723.style.top = (164 - p107 / data["MasterValues"][18]["maxvalue"] * 160).toString() + "px";
  v723.innerText = p107.toString();
  const v724 = document.getElementById("724");
  const v725 = document.getElementById("725");
  const v726 = document.getElementById("726");
  var p108 = data["MasterValues"][40]["maxvalue"] + totaldiffO[8];
  v724.style.height = (p108 / data["MasterValues"][19]["maxvalue"] * 160).toString() + "px";
  v725.innerText = "+" + todaydiffO[8].toString();
  v726.style.top = (164 - p108 / data["MasterValues"][19]["maxvalue"] * 160).toString() + "px";
  v726.innerText = p108.toString();
  const v800 = document.getElementById("800");
  v800.innerText = todayO.join(", ");
}

function getColor(diff) {
  if (diff == 0) return 8;
  else if (diff < 400) return 0;
  else if (diff < 800) return 1;
  else if (diff < 1200) return 2;
  else if (diff < 1600) return 3;
  else if (diff < 2000) return 4;
  else if (diff < 2400) return 5;
  else if (diff < 2800) return 6;
  else return 7;
}