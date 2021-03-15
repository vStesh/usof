import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import style from './Users.module.css';
import Sorting from './Sorting';

let Users = () => {

    const [sort, setSort] = useState({type:'reputation', order: 'desc'});
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(false);
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }

   let url = `https://api.stackexchange.com/2.2/users?order=${sort.order}&sort=${sort.type}&site=stackoverflow&key=4bo*OgdhgS9algrG4b2fPg((`;

let dataNew = {
    "items": [
      {
        "badge_counts": {
          "bronze": 8898,
          "silver": 8673,
          "gold": 787
        },
        "account_id": 11683,
        "is_employee": false,
        "last_modified_date": 1615723217,
        "last_access_date": 1615727467,
        "reputation_change_year": 14812,
        "reputation_change_quarter": 14812,
        "reputation_change_month": 2920,
        "reputation_change_week": 190,
        "reputation_change_day": 190,
        "reputation": 1245528,
        "creation_date": 1222430705,
        "user_type": "registered",
        "user_id": 22656,
        "accept_rate": 86,
        "location": "Reading, United Kingdom",
        "website_url": "http://csharpindepth.com",
        "link": "https://stackoverflow.com/users/22656/jon-skeet",
        "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=128&d=identicon&r=PG",
        "display_name": "Jon Skeet"
      },
      {
        "badge_counts": {
          "bronze": 606,
          "silver": 471,
          "gold": 49
        },
        "account_id": 1165580,
        "is_employee": false,
        "last_modified_date": 1615710300,
        "last_access_date": 1615730346,
        "reputation_change_year": 31680,
        "reputation_change_quarter": 31680,
        "reputation_change_month": 5986,
        "reputation_change_week": 235,
        "reputation_change_day": 235,
        "reputation": 1087102,
        "creation_date": 1326311637,
        "user_type": "registered",
        "user_id": 1144035,
        "location": "New York, United States",
        "website_url": "http://www.data-miners.com",
        "link": "https://stackoverflow.com/users/1144035/gordon-linoff",
        "profile_image": "https://www.gravatar.com/avatar/e514b017977ebf742a418cac697d8996?s=128&d=identicon&r=PG",
        "display_name": "Gordon Linoff"
      },
      {
        "badge_counts": {
          "bronze": 4187,
          "silver": 3573,
          "gold": 427
        },
        "account_id": 4243,
        "is_employee": false,
        "last_modified_date": 1615527007,
        "last_access_date": 1615729875,
        "reputation_change_year": 17154,
        "reputation_change_quarter": 17154,
        "reputation_change_month": 3159,
        "reputation_change_week": 165,
        "reputation_change_day": 165,
        "reputation": 1025446,
        "creation_date": 1221344553,
        "user_type": "registered",
        "user_id": 6309,
        "accept_rate": 100,
        "location": "France",
        "website_url": "http://careers.stackoverflow.com/vonc",
        "link": "https://stackoverflow.com/users/6309/vonc",
        "profile_image": "https://www.gravatar.com/avatar/7aa22372b695ed2b26052c340f9097eb?s=128&d=identicon&r=PG",
        "display_name": "VonC"
      },
      {
        "badge_counts": {
          "bronze": 3441,
          "silver": 3460,
          "gold": 349
        },
        "account_id": 52822,
        "is_employee": false,
        "last_modified_date": 1615383304,
        "last_access_date": 1615721341,
        "reputation_change_year": 11638,
        "reputation_change_quarter": 11638,
        "reputation_change_month": 2293,
        "reputation_change_week": 50,
        "reputation_change_day": 50,
        "reputation": 980633,
        "creation_date": 1250527322,
        "user_type": "registered",
        "user_id": 157882,
        "accept_rate": 93,
        "location": "Willemstad, Cura&#231;ao",
        "website_url": "https://balusc.omnifaces.org",
        "link": "https://stackoverflow.com/users/157882/balusc",
        "profile_image": "https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=128&d=identicon&r=PG",
        "display_name": "BalusC"
      },
      {
        "badge_counts": {
          "bronze": 2866,
          "silver": 3185,
          "gold": 255
        },
        "account_id": 14332,
        "is_employee": false,
        "last_modified_date": 1614906600,
        "last_access_date": 1615485738,
        "reputation_change_year": 8829,
        "reputation_change_quarter": 8829,
        "reputation_change_month": 1808,
        "reputation_change_week": 40,
        "reputation_change_day": 40,
        "reputation": 950830,
        "creation_date": 1224432467,
        "user_type": "registered",
        "user_id": 29407,
        "accept_rate": 86,
        "location": "Sofia, Bulgaria",
        "website_url": "http://stackoverflow.com/search?q=user%3a29407&tab=newest",
        "link": "https://stackoverflow.com/users/29407/darin-dimitrov",
        "profile_image": "https://www.gravatar.com/avatar/e3a181e9cdd4757a8b416d93878770c5?s=128&d=identicon&r=PG",
        "display_name": "Darin Dimitrov"
      },
      {
        "badge_counts": {
          "bronze": 2761,
          "silver": 2396,
          "gold": 232
        },
        "account_id": 11975,
        "is_employee": true,
        "last_modified_date": 1615215900,
        "last_access_date": 1615715145,
        "reputation_change_year": 11062,
        "reputation_change_quarter": 11062,
        "reputation_change_month": 2032,
        "reputation_change_week": 0,
        "reputation_change_day": 0,
        "reputation": 913940,
        "creation_date": 1222667162,
        "user_type": "moderator",
        "user_id": 23354,
        "accept_rate": 100,
        "location": "Forest of Dean, United Kingdom",
        "website_url": "http://blog.marcgravell.com",
        "link": "https://stackoverflow.com/users/23354/marc-gravell",
        "profile_image": "https://i.stack.imgur.com/CrVFH.png?s=128&g=1",
        "display_name": "Marc Gravell"
      },
      {
        "badge_counts": {
          "bronze": 2226,
          "silver": 2187,
          "gold": 171
        },
        "account_id": 39846,
        "is_employee": false,
        "last_modified_date": 1615719900,
        "last_access_date": 1615730072,
        "reputation_change_year": 11025,
        "reputation_change_quarter": 11025,
        "reputation_change_month": 2130,
        "reputation_change_week": 20,
        "reputation_change_day": 20,
        "reputation": 899043,
        "creation_date": 1243786808,
        "user_type": "registered",
        "user_id": 115145,
        "accept_rate": 84,
        "location": "Pennsylvania, United States",
        "website_url": "https://commonsware.com",
        "link": "https://stackoverflow.com/users/115145/commonsware",
        "profile_image": "https://i.stack.imgur.com/wDnd8.png?s=128&g=1",
        "display_name": "CommonsWare"
      },
      {
        "badge_counts": {
          "bronze": 2943,
          "silver": 3431,
          "gold": 237
        },
        "account_id": 35417,
        "is_employee": false,
        "last_modified_date": 1615693207,
        "last_access_date": 1615727584,
        "reputation_change_year": 15155,
        "reputation_change_quarter": 15155,
        "reputation_change_month": 2869,
        "reputation_change_week": 201,
        "reputation_change_day": 201,
        "reputation": 873575,
        "creation_date": 1241362437,
        "user_type": "moderator",
        "user_id": 100297,
        "location": "Cambridge, UK",
        "website_url": "http://www.zopatista.com/",
        "link": "https://stackoverflow.com/users/100297/martijn-pieters",
        "profile_image": "https://www.gravatar.com/avatar/24780fb6df85a943c7aea0402c843737?s=128&d=identicon&r=PG",
        "display_name": "Martijn Pieters"
      },
      {
        "badge_counts": {
          "bronze": 2358,
          "silver": 1541,
          "gold": 130
        },
        "account_id": 9266,
        "is_employee": false,
        "last_modified_date": 1615662304,
        "last_access_date": 1615729496,
        "reputation_change_year": 6886,
        "reputation_change_quarter": 6886,
        "reputation_change_month": 1370,
        "reputation_change_week": 10,
        "reputation_change_day": 10,
        "reputation": 866706,
        "creation_date": 1221698729,
        "user_type": "registered",
        "user_id": 17034,
        "location": "Madison, WI",
        "website_url": "",
        "link": "https://stackoverflow.com/users/17034/hans-passant",
        "profile_image": "https://i.stack.imgur.com/Cii6b.png?s=128&g=1",
        "display_name": "Hans Passant"
      },
      {
        "badge_counts": {
          "bronze": 1608,
          "silver": 1579,
          "gold": 162
        },
        "account_id": 52616,
        "is_employee": false,
        "last_modified_date": 1615636813,
        "last_access_date": 1615718618,
        "reputation_change_year": 16456,
        "reputation_change_quarter": 16456,
        "reputation_change_month": 3157,
        "reputation_change_week": 100,
        "reputation_change_day": 100,
        "reputation": 861511,
        "creation_date": 1250420422,
        "user_type": "registered",
        "user_id": 157247,
        "accept_rate": 91,
        "location": "United Kingdom",
        "website_url": "https://thenewtoys.dev",
        "link": "https://stackoverflow.com/users/157247/t-j-crowder",
        "profile_image": "https://i.stack.imgur.com/4HovX.jpg?s=128&g=1",
        "display_name": "T.J. Crowder"
      },
      {
        "badge_counts": {
          "bronze": 1230,
          "silver": 1093,
          "gold": 170
        },
        "account_id": 680,
        "is_employee": false,
        "last_modified_date": 1615586871,
        "last_access_date": 1615715556,
        "reputation_change_year": 13455,
        "reputation_change_quarter": 13455,
        "reputation_change_month": 2576,
        "reputation_change_week": 140,
        "reputation_change_day": 140,
        "reputation": 814161,
        "creation_date": 1218356820,
        "user_type": "registered",
        "user_id": 893,
        "accept_rate": 84,
        "location": "Christchurch, New Zealand",
        "website_url": "http://hewgill.com",
        "link": "https://stackoverflow.com/users/893/greg-hewgill",
        "profile_image": "https://www.gravatar.com/avatar/747ffa5da3538e66840ebc0548b8fd58?s=128&d=identicon&r=PG",
        "display_name": "Greg Hewgill"
      },
      {
        "badge_counts": {
          "bronze": 1887,
          "silver": 1795,
          "gold": 164
        },
        "account_id": 15988,
        "is_employee": false,
        "last_modified_date": 1614906600,
        "last_access_date": 1611579759,
        "reputation_change_year": 9362,
        "reputation_change_quarter": 9362,
        "reputation_change_month": 1560,
        "reputation_change_week": 60,
        "reputation_change_day": 60,
        "reputation": 791366,
        "creation_date": 1225829805,
        "user_type": "registered",
        "user_id": 34397,
        "accept_rate": 87,
        "location": "New Jersey",
        "website_url": "https://SLaks.net",
        "link": "https://stackoverflow.com/users/34397/slaks",
        "profile_image": "https://www.gravatar.com/avatar/7deca8ec973c3c0875e9a36e1e3e2c44?s=128&d=identicon&r=PG",
        "display_name": "SLaks"
      },
      {
        "badge_counts": {
          "bronze": 1191,
          "silver": 1066,
          "gold": 99
        },
        "account_id": 10162,
        "is_employee": false,
        "last_modified_date": 1615698604,
        "last_access_date": 1615730122,
        "reputation_change_year": 12996,
        "reputation_change_quarter": 12996,
        "reputation_change_month": 2180,
        "reputation_change_week": 83,
        "reputation_change_day": 83,
        "reputation": 786165,
        "creation_date": 1221842906,
        "user_type": "registered",
        "user_id": 19068,
        "location": "United Kingdom",
        "website_url": "",
        "link": "https://stackoverflow.com/users/19068/quentin",
        "profile_image": "https://www.gravatar.com/avatar/1d2d3229ed1961d2bd81853242493247?s=128&d=identicon&r=PG",
        "display_name": "Quentin"
      },
      {
        "badge_counts": {
          "bronze": 1819,
          "silver": 1456,
          "gold": 208
        },
        "account_id": 8291,
        "is_employee": false,
        "last_modified_date": 1615717803,
        "last_access_date": 1615704441,
        "reputation_change_year": 11244,
        "reputation_change_quarter": 11244,
        "reputation_change_month": 2223,
        "reputation_change_week": 60,
        "reputation_change_day": 60,
        "reputation": 762467,
        "creation_date": 1221622605,
        "user_type": "registered",
        "user_id": 14860,
        "accept_rate": 100,
        "website_url": "",
        "link": "https://stackoverflow.com/users/14860/paxdiablo",
        "profile_image": "https://i.stack.imgur.com/vXG1F.png?s=128&g=1",
        "display_name": "paxdiablo"
      },
      {
        "badge_counts": {
          "bronze": 1340,
          "silver": 1152,
          "gold": 153
        },
        "account_id": 34048,
        "is_employee": false,
        "last_modified_date": 1614953100,
        "last_access_date": 1615237405,
        "reputation_change_year": 11798,
        "reputation_change_quarter": 11798,
        "reputation_change_month": 2232,
        "reputation_change_week": 40,
        "reputation_change_day": 40,
        "reputation": 751379,
        "creation_date": 1240625354,
        "user_type": "registered",
        "user_id": 95810,
        "accept_rate": 80,
        "location": "Sunnyvale, CA",
        "website_url": "http://www.aleax.it",
        "link": "https://stackoverflow.com/users/95810/alex-martelli",
        "profile_image": "https://www.gravatar.com/avatar/e8d5fe90f1fe2148bf130cccd4dc311c?s=128&d=identicon&r=PG",
        "display_name": "Alex Martelli"
      },
      {
        "badge_counts": {
          "bronze": 828,
          "silver": 896,
          "gold": 173
        },
        "account_id": 3748,
        "is_employee": false,
        "last_modified_date": 1615295102,
        "last_access_date": 1615610217,
        "reputation_change_year": 10635,
        "reputation_change_quarter": 10635,
        "reputation_change_month": 2006,
        "reputation_change_week": 40,
        "reputation_change_day": 40,
        "reputation": 713325,
        "creation_date": 1220976258,
        "user_type": "registered",
        "user_id": 5445,
        "location": "Guatemala",
        "website_url": "http://codingspot.com",
        "link": "https://stackoverflow.com/users/5445/christian-c-salvad%c3%b3",
        "profile_image": "https://www.gravatar.com/avatar/932fb89b9d4049cec5cba357bf0ae388?s=128&d=identicon&r=PG",
        "display_name": "Christian C. Salvad&#243;"
      },
      {
        "badge_counts": {
          "bronze": 1406,
          "silver": 1490,
          "gold": 160
        },
        "account_id": 24377,
        "is_employee": false,
        "last_modified_date": 1614784201,
        "last_access_date": 1615717481,
        "reputation_change_year": 11043,
        "reputation_change_quarter": 11043,
        "reputation_change_month": 2348,
        "reputation_change_week": 90,
        "reputation_change_day": 90,
        "reputation": 708379,
        "creation_date": 1233672960,
        "user_type": "registered",
        "user_id": 61974,
        "location": "Denmark",
        "website_url": "http://careers.stackoverflow.com/markbyers/",
        "link": "https://stackoverflow.com/users/61974/mark-byers",
        "profile_image": "https://www.gravatar.com/avatar/ad240ed5cc406759f0fd72591dc8ca47?s=128&d=identicon&r=PG",
        "display_name": "Mark Byers"
      },
      {
        "badge_counts": {
          "bronze": 1528,
          "silver": 1561,
          "gold": 145
        },
        "account_id": 64585,
        "is_employee": false,
        "last_modified_date": 1615586861,
        "last_access_date": 1615661652,
        "reputation_change_year": 13926,
        "reputation_change_quarter": 13926,
        "reputation_change_month": 2610,
        "reputation_change_week": 70,
        "reputation_change_day": 70,
        "reputation": 697385,
        "creation_date": 1255610900,
        "user_type": "registered",
        "user_id": 190597,
        "accept_rate": 88,
        "website_url": "",
        "link": "https://stackoverflow.com/users/190597/unutbu",
        "profile_image": "https://www.gravatar.com/avatar/aabc98d5c6482ca0e1405ec97710f30a?s=128&d=identicon&r=PG&f=1",
        "display_name": "unutbu"
      },
      {
        "badge_counts": {
          "bronze": 1057,
          "silver": 992,
          "gold": 157
        },
        "account_id": 76141,
        "is_employee": false,
        "last_modified_date": 1615224300,
        "last_access_date": 1615674328,
        "reputation_change_year": 11643,
        "reputation_change_quarter": 11643,
        "reputation_change_month": 2012,
        "reputation_change_week": 60,
        "reputation_change_day": 60,
        "reputation": 693232,
        "creation_date": 1259104089,
        "user_type": "registered",
        "user_id": 218196,
        "accept_rate": 100,
        "website_url": "http://felix-kling.de",
        "link": "https://stackoverflow.com/users/218196/felix-kling",
        "profile_image": "https://i.stack.imgur.com/4P5DY.jpg?s=128&g=1",
        "display_name": "Felix Kling"
      },
      {
        "badge_counts": {
          "bronze": 1276,
          "silver": 1222,
          "gold": 130
        },
        "account_id": 10930,
        "is_employee": false,
        "last_modified_date": 1614046201,
        "last_access_date": 1546328601,
        "reputation_change_year": 9885,
        "reputation_change_quarter": 9885,
        "reputation_change_month": 2010,
        "reputation_change_week": 70,
        "reputation_change_day": 70,
        "reputation": 689739,
        "creation_date": 1222135580,
        "user_type": "registered",
        "user_id": 20862,
        "accept_rate": 50,
        "website_url": "",
        "link": "https://stackoverflow.com/users/20862/ignacio-vazquez-abrams",
        "profile_image": "https://www.gravatar.com/avatar/2343ae368d3241278581ce6c87f62a25?s=128&d=identicon&r=PG",
        "display_name": "Ignacio Vazquez-Abrams"
      },
      {
        "badge_counts": {
          "bronze": 1385,
          "silver": 986,
          "gold": 71
        },
        "account_id": 134022,
        "is_employee": false,
        "last_modified_date": 1615544400,
        "last_access_date": 1615694435,
        "reputation_change_year": 5025,
        "reputation_change_quarter": 5025,
        "reputation_change_month": 1040,
        "reputation_change_week": 50,
        "reputation_change_day": 50,
        "reputation": 670130,
        "creation_date": 1273269250,
        "user_type": "registered",
        "user_id": 335858,
        "accept_rate": 81,
        "location": "United States",
        "website_url": "http://stackoverflow.com/users/335858/dasblinkenlight",
        "link": "https://stackoverflow.com/users/335858/sergey-kalinichenko",
        "profile_image": "https://www.gravatar.com/avatar/4af3541c00d591e9a518b9c0b3b1190a?s=128&d=identicon&r=PG",
        "display_name": "Sergey Kalinichenko"
      },
      {
        "badge_counts": {
          "bronze": 1378,
          "silver": 1243,
          "gold": 156
        },
        "account_id": 7633,
        "is_employee": false,
        "last_modified_date": 1615590300,
        "last_access_date": 1615729684,
        "reputation_change_year": 7762,
        "reputation_change_quarter": 7762,
        "reputation_change_month": 1565,
        "reputation_change_week": 70,
        "reputation_change_day": 70,
        "reputation": 668144,
        "creation_date": 1221588555,
        "user_type": "registered",
        "user_id": 13302,
        "accept_rate": 99,
        "location": "Bern, Switzerland",
        "website_url": "",
        "link": "https://stackoverflow.com/users/13302/marc-s",
        "profile_image": "https://www.gravatar.com/avatar/b4779212f57ff2e9549ea90a4499c2d7?s=128&d=identicon&r=PG",
        "display_name": "marc_s"
      },
      {
        "badge_counts": {
          "bronze": 1407,
          "silver": 1178,
          "gold": 138
        },
        "account_id": 11948,
        "is_employee": false,
        "last_modified_date": 1615215900,
        "last_access_date": 1615333780,
        "reputation_change_year": 7700,
        "reputation_change_quarter": 7700,
        "reputation_change_month": 1632,
        "reputation_change_week": 20,
        "reputation_change_day": 20,
        "reputation": 665770,
        "creation_date": 1222642783,
        "user_type": "registered",
        "user_id": 23283,
        "accept_rate": 100,
        "location": "Redmond, WA",
        "website_url": "http://blog.paranoidcoding.com/",
        "link": "https://stackoverflow.com/users/23283/jaredpar",
        "profile_image": "https://www.gravatar.com/avatar/529ba429a58902bef56c2fcb672d5ccb?s=128&d=identicon&r=PG",
        "display_name": "JaredPar"
      },
      {
        "badge_counts": {
          "bronze": 1172,
          "silver": 802,
          "gold": 125
        },
        "account_id": 8423,
        "is_employee": false,
        "last_modified_date": 1615717502,
        "last_access_date": 1615728320,
        "reputation_change_year": 8097,
        "reputation_change_quarter": 8097,
        "reputation_change_month": 1330,
        "reputation_change_week": 30,
        "reputation_change_day": 30,
        "reputation": 659519,
        "creation_date": 1221633947,
        "user_type": "registered",
        "user_id": 15168,
        "accept_rate": 100,
        "location": "Colorado, USA",
        "website_url": "https://stackoverflow.com/users/15168",
        "link": "https://stackoverflow.com/users/15168/jonathan-leffler",
        "profile_image": "https://i.stack.imgur.com/WtEI9.png?s=128&g=1",
        "display_name": "Jonathan Leffler"
      },
      {
        "badge_counts": {
          "bronze": 536,
          "silver": 455,
          "gold": 58
        },
        "account_id": 262968,
        "is_employee": false,
        "last_modified_date": 1615457701,
        "last_access_date": 1615730244,
        "reputation_change_year": 14760,
        "reputation_change_quarter": 14760,
        "reputation_change_month": 2752,
        "reputation_change_week": 85,
        "reputation_change_day": 85,
        "reputation": 648612,
        "creation_date": 1292821840,
        "user_type": "registered",
        "user_id": 548225,
        "accept_rate": 90,
        "location": "Bangalore, India",
        "website_url": "http://anubhava.wordpress.com",
        "link": "https://stackoverflow.com/users/548225/anubhava",
        "profile_image": "https://www.gravatar.com/avatar/dab08478b226280d4a30894c9a7ed719?s=128&d=identicon&r=PG",
        "display_name": "anubhava"
      },
      {
        "badge_counts": {
          "bronze": 472,
          "silver": 365,
          "gold": 23
        },
        "account_id": 4601727,
        "is_employee": false,
        "last_modified_date": 1615414800,
        "last_access_date": 1615679253,
        "reputation_change_year": 23366,
        "reputation_change_quarter": 23366,
        "reputation_change_month": 5160,
        "reputation_change_week": 135,
        "reputation_change_day": 135,
        "reputation": 647448,
        "creation_date": 1402536093,
        "user_type": "registered",
        "user_id": 3732271,
        "website_url": "http://www.linkedin.com/in/akrun1",
        "link": "https://stackoverflow.com/users/3732271/akrun",
        "profile_image": "https://www.gravatar.com/avatar/ee6e12042dc31b1ef27471482f9ff91f?s=128&d=identicon&r=PG&f=1",
        "display_name": "akrun"
      },
      {
        "badge_counts": {
          "bronze": 632,
          "silver": 606,
          "gold": 92
        },
        "account_id": 10375,
        "is_employee": false,
        "last_modified_date": 1614230400,
        "last_access_date": 1615549909,
        "reputation_change_year": 11588,
        "reputation_change_quarter": 11588,
        "reputation_change_month": 2070,
        "reputation_change_week": 60,
        "reputation_change_day": 60,
        "reputation": 636445,
        "creation_date": 1221903545,
        "user_type": "registered",
        "user_id": 19563,
        "location": "United Kingdom",
        "website_url": "",
        "link": "https://stackoverflow.com/users/19563/cb-bailey",
        "profile_image": "https://www.gravatar.com/avatar/a8db27c91db97757a829c7971fd62b84?s=128&d=identicon&r=PG",
        "display_name": "CB Bailey"
      },
      {
        "badge_counts": {
          "bronze": 945,
          "silver": 670,
          "gold": 95
        },
        "account_id": 26521,
        "is_employee": false,
        "last_modified_date": 1615115100,
        "last_access_date": 1615586043,
        "reputation_change_year": 6983,
        "reputation_change_quarter": 6983,
        "reputation_change_month": 1499,
        "reputation_change_week": 60,
        "reputation_change_day": 60,
        "reputation": 633893,
        "creation_date": 1235161492,
        "user_type": "registered",
        "user_id": 69083,
        "location": "Virsbo, Sweden",
        "website_url": "http://www.guffa.com",
        "link": "https://stackoverflow.com/users/69083/guffa",
        "profile_image": "https://www.gravatar.com/avatar/1db0cdfd3fe268e270ec481a73046c2f?s=128&d=identicon&r=PG",
        "display_name": "Guffa"
      },
      {
        "badge_counts": {
          "bronze": 1166,
          "silver": 1095,
          "gold": 79
        },
        "account_id": 277416,
        "is_employee": false,
        "last_modified_date": 1614906600,
        "last_access_date": 1598086966,
        "reputation_change_year": 6594,
        "reputation_change_quarter": 6594,
        "reputation_change_month": 1310,
        "reputation_change_week": 0,
        "reputation_change_day": 0,
        "reputation": 626934,
        "creation_date": 1294757277,
        "user_type": "registered",
        "user_id": 571407,
        "accept_rate": 100,
        "location": "Saint-Etienne, France",
        "website_url": "",
        "link": "https://stackoverflow.com/users/571407/jb-nizet",
        "profile_image": "https://www.gravatar.com/avatar/2f0d9dec16bae1e06552af55ddefc11f?s=128&d=identicon&r=PG",
        "display_name": "JB Nizet"
      },
      {
        "badge_counts": {
          "bronze": 1088,
          "silver": 721,
          "gold": 84
        },
        "account_id": 47283,
        "is_employee": false,
        "last_modified_date": 1615445700,
        "last_access_date": 1615717930,
        "reputation_change_year": 9611,
        "reputation_change_quarter": 9611,
        "reputation_change_month": 1674,
        "reputation_change_week": 50,
        "reputation_change_day": 50,
        "reputation": 623495,
        "creation_date": 1247815702,
        "user_type": "registered",
        "user_id": 139985,
        "accept_rate": 69,
        "location": "Australia",
        "website_url": "",
        "link": "https://stackoverflow.com/users/139985/stephen-c",
        "profile_image": "https://www.gravatar.com/avatar/147c5a9cc1feec049c50da791ac7d144?s=128&d=identicon&r=PG",
        "display_name": "Stephen C"
      }
    ],
    "has_more": true,
    "quota_max": 10000,
    "quota_remaining": 9488
  }
  console.log(url);
    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => {
                console.log(result);
            setData(result.items); 
        });
    }, [sort.type + '-' + sort.order]);

    console.log(data);

    let items = [];
    if(data) {
        items = data.map(item => 
            <UserItem item={item}/>
        ); 
    }
    console.log(items);
    return (
        <div>
            <h2>Users</h2>
            <div className={style.headerline}>
                <input className={style.input} placeholder="Filter by user" />
                <div className={style.filters}>
                  <Sorting getSorting={getSorting} sort={sort.type + '-' + sort.order}/> 
                </div>
            </div>
            <div className={style.items}>
                { items }
            </div>
        </div>
    );
}

export default Users;