/*
function casesCallback(status, response) {
  if (status) {
    alert(status);
  } else {
    cases = response;
  }
}

var getCases = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      casesCallback(null, xhr.response);
    } else {
      casesCallback(status, xhr.response);
    }
  };
  xhr.send();
};

let casesUrl =
  "https://services6.arcgis.com/5jNaHNYe2AnnqRnS/arcgis/rest/services/COVID19_JapanData_Tokyo/FeatureServer/0/query?where=%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89%3E0&returnIdsOnly=false&returnCountOnly=false&f=pgeojson&outFields=*&orderByFields=%E5%85%AC%E8%A1%A8%E6%97%A5,%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89";
var cases = {};
getCases(casesUrl);
*/

var cases = {
  "type" : "FeatureCollection", 
  "features" : [
    {
      "type" : "Feature", 
      "id" : 801, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1585699200000, 
        "件数" : 3, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 801
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 802, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1585699200000, 
        "件数" : 19, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 802
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 803, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1585699200000, 
        "件数" : 39, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 803
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 804, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1585699200000, 
        "件数" : 22, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 804
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 805, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1585699200000, 
        "件数" : 4, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 805
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 806, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1585699200000, 
        "件数" : 15, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 806
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 807, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1585699200000, 
        "件数" : 5, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 807
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 808, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1585699200000, 
        "件数" : 10, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 808
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 810, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1585699200000, 
        "件数" : 24, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 810
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 811, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1585699200000, 
        "件数" : 21, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 811
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 812, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1585699200000, 
        "件数" : 15, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 812
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 813, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1585699200000, 
        "件数" : 44, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 813
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 814, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1585699200000, 
        "件数" : 18, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 814
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 815, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1585699200000, 
        "件数" : 15, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 815
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 816, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1585699200000, 
        "件数" : 28, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 816
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 817, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1585699200000, 
        "件数" : 9, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 817
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 818, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1585699200000, 
        "件数" : 4, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 818
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 819, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1585699200000, 
        "件数" : 2, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 819
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 820, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1585699200000, 
        "件数" : 4, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 820
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 821, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1585699200000, 
        "件数" : 20, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 821
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 822, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1585699200000, 
        "件数" : 8, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 822
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 823, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1585699200000, 
        "件数" : 6, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 823
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 824, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1585699200000, 
        "件数" : 8, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 824
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 825, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1585699200000, 
        "件数" : 4, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 825
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 826, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 826
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 827, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1585699200000, 
        "件数" : 3, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 827
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 828, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1585699200000, 
        "件数" : 7, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 828
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 829, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 829
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 830, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 830
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 831, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 831
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 832, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 832
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 833, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1585699200000, 
        "件数" : 6, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 833
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 834, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 834
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 835, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 835
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 836, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1585699200000, 
        "件数" : 3, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 836
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 837, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 837
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 838, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 838
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 839, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 839
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 840, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 840
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 841, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 841
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 842, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 842
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 843, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 843
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 844, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 844
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 845, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 845
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 846, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 846
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 847, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1585699200000, 
        "件数" : 1, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 847
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 848, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1585699200000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 848
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 849, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 849
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 850, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1585699200000, 
        "件数" : 8, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 850
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 851, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 851
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 852, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 852
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 853, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 853
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 854, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 854
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 855, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 855
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 856, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 856
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 857, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 857
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 858, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 858
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 859, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 859
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 860, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 860
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 861, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 861
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 862, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 862
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 863, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1585699200000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 863
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 864, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1585785600000, 
        "件数" : 3, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 864
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 865, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1585785600000, 
        "件数" : 19, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 865
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 866, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1585785600000, 
        "件数" : 40, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 866
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 867, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1585785600000, 
        "件数" : 30, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 867
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 868, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1585785600000, 
        "件数" : 4, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 868
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 869, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1585785600000, 
        "件数" : 19, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 869
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 870, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1585785600000, 
        "件数" : 5, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 870
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 871, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1585785600000, 
        "件数" : 12, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 871
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 872, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1585785600000, 
        "件数" : 24, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 872
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 873, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1585785600000, 
        "件数" : 23, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 873
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 874, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1585785600000, 
        "件数" : 16, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 874
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 875, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1585785600000, 
        "件数" : 54, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 875
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 876, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1585785600000, 
        "件数" : 21, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 876
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 877, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1585785600000, 
        "件数" : 18, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 877
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 878, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1585785600000, 
        "件数" : 30, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 878
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 879, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1585785600000, 
        "件数" : 10, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 879
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 880, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1585785600000, 
        "件数" : 7, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 880
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 881, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1585785600000, 
        "件数" : 2, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 881
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 882, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1585785600000, 
        "件数" : 6, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 882
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 883, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1585785600000, 
        "件数" : 21, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 883
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 884, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1585785600000, 
        "件数" : 10, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 884
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 885, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1585785600000, 
        "件数" : 14, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 885
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 886, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1585785600000, 
        "件数" : 8, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 886
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 887, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1585785600000, 
        "件数" : 4, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 887
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 888, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 888
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 889, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1585785600000, 
        "件数" : 4, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 889
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 890, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1585785600000, 
        "件数" : 7, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 890
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 891, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1585785600000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 891
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 892, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1585785600000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 892
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 893, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 893
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 894, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1585785600000, 
        "件数" : 1, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 894
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 895, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1585785600000, 
        "件数" : 10, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 895
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 896, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1585785600000, 
        "件数" : 2, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 896
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 897, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1585785600000, 
        "件数" : 2, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 897
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 898, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1585785600000, 
        "件数" : 4, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 898
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 899, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 899
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 900, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 900
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 901, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 901
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1585785600000, 
        "件数" : 1, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1585785600000, 
        "件数" : 1, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1585785600000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1585785600000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1585785600000, 
        "件数" : 9, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 116
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 117, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 117
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 118, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 118
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 119, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 119
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 120, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 120
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 121, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 121
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 122, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 122
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 123, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 123
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 124, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1585785600000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 124
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 125, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1585872000000, 
        "件数" : 4, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 125
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 126, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1585872000000, 
        "件数" : 19, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 126
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 127, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1585872000000, 
        "件数" : 50, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 127
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 128, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1585872000000, 
        "件数" : 36, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 128
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 129, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1585872000000, 
        "件数" : 4, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 129
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 130, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1585872000000, 
        "件数" : 23, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 130
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 131, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1585872000000, 
        "件数" : 7, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 131
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 132, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1585872000000, 
        "件数" : 12, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 132
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 133, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1585872000000, 
        "件数" : 29, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 133
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 134, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1585872000000, 
        "件数" : 29, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 134
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 135, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1585872000000, 
        "件数" : 18, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 135
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 136, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1585872000000, 
        "件数" : 67, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 136
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 137, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1585872000000, 
        "件数" : 24, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 137
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 138, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1585872000000, 
        "件数" : 19, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 138
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 139, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1585872000000, 
        "件数" : 34, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 139
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 140, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1585872000000, 
        "件数" : 13, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 140
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 141, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1585872000000, 
        "件数" : 7, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 141
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 142, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1585872000000, 
        "件数" : 3, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 142
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 143, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1585872000000, 
        "件数" : 9, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 143
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 144, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1585872000000, 
        "件数" : 25, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 144
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 145, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1585872000000, 
        "件数" : 11, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 145
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 146, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1585872000000, 
        "件数" : 14, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 146
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 147, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1585872000000, 
        "件数" : 11, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 147
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 148, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1585872000000, 
        "件数" : 4, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 148
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 149, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 149
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 150, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1585872000000, 
        "件数" : 4, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 150
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 151, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1585872000000, 
        "件数" : 7, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 151
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 152, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1585872000000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 152
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 153, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1585872000000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 153
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 154, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 154
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 155, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1585872000000, 
        "件数" : 1, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 155
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 156, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1585872000000, 
        "件数" : 10, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 156
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 157, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1585872000000, 
        "件数" : 2, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 157
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 158, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1585872000000, 
        "件数" : 2, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 158
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 159, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1585872000000, 
        "件数" : 4, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 159
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 160, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 160
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 161, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 161
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 162, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 162
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 163, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 163
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 164, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 164
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 165, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1585872000000, 
        "件数" : 1, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 165
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 166, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 166
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 167, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1585872000000, 
        "件数" : 1, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 167
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 168, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 168
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 169, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 169
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 170, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1585872000000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 170
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 171, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1585872000000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 171
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 172, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 172
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 173, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1585872000000, 
        "件数" : 9, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 173
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 174, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 174
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 175, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 175
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 176, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 176
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 177, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 177
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 178, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 178
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 179, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 179
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 180, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 180
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 181, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 181
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 182, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 182
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 183, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 183
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 184, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 184
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 185, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 185
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 186, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1585872000000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 186
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 187, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1585958400000, 
        "件数" : 4, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 187
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 188, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1585958400000, 
        "件数" : 20, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 188
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 189, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1585958400000, 
        "件数" : 58, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 189
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 190, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1585958400000, 
        "件数" : 38, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 190
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 191, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1585958400000, 
        "件数" : 6, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 191
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 192, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1585958400000, 
        "件数" : 25, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 192
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 193, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1585958400000, 
        "件数" : 10, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 193
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 194, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1585958400000, 
        "件数" : 13, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 194
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 195, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1585958400000, 
        "件数" : 30, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 195
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 196, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1585958400000, 
        "件数" : 34, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 196
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 197, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1585958400000, 
        "件数" : 19, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 197
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 198, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1585958400000, 
        "件数" : 79, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 198
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 199, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1585958400000, 
        "件数" : 26, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 199
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 200, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1585958400000, 
        "件数" : 24, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 200
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1585958400000, 
        "件数" : 34, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 2, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1585958400000, 
        "件数" : 14, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 2
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 3, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1585958400000, 
        "件数" : 7, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 3
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 4, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.7334564, 35.7529398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1585958400000, 
        "件数" : 3, 
        "経度" : 139.7334564, 
        "緯度" : 35.7529398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 4
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 5, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1585958400000, 
        "件数" : 13, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 5
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 6, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1585958400000, 
        "件数" : 34, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 6
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 7, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1585958400000, 
        "件数" : 12, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 7
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 8, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1585958400000, 
        "件数" : 16, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 8
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 9, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1585958400000, 
        "件数" : 11, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 9
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 10, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1585958400000, 
        "件数" : 5, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 10
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 11, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 11
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 12, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1585958400000, 
        "件数" : 4, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 12
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 13, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1585958400000, 
        "件数" : 7, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 13
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 14, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1585958400000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 14
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 15, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1585958400000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 15
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 16, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1585958400000, 
        "件数" : 1, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 16
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 17, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1585958400000, 
        "件数" : 1, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 17
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 18, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1585958400000, 
        "件数" : 10, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 18
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 19, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1585958400000, 
        "件数" : 2, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 19
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 20, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1585958400000, 
        "件数" : 3, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 20
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 21, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1585958400000, 
        "件数" : 4, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 21
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 22, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 22
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 23, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 23
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 24, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 24
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 25, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 25
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 26, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1585958400000, 
        "件数" : 3, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 26
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 27, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1585958400000, 
        "件数" : 1, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 27
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 28, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 28
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 29, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1585958400000, 
        "件数" : 2, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 29
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 30, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 30
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 31, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 31
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 32, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1585958400000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 32
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 33, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1585958400000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 33
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 34, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 34
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 35, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1585958400000, 
        "件数" : 9, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 35
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 36, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 36
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 37, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 37
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 38, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 38
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 39, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 39
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 40, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 40
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 41, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 41
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 42, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 42
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 43, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 43
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 44, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 44
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 45, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 45
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 46, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 46
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 47, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 47
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 48, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1585958400000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 48
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 49, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586044800000, 
        "件数" : 5, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 49
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 50, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586044800000, 
        "件数" : 21, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 50
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 51, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586044800000, 
        "件数" : 67, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 51
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 52, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586044800000, 
        "件数" : 39, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 52
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 53, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586044800000, 
        "件数" : 7, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 53
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 54, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586044800000, 
        "件数" : 27, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 54
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 55, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586044800000, 
        "件数" : 11, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 55
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 56, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586044800000, 
        "件数" : 14, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 56
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 57, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586044800000, 
        "件数" : 38, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 57
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 58, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586044800000, 
        "件数" : 40, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 58
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 59, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586044800000, 
        "件数" : 28, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 59
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 60, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586044800000, 
        "件数" : 93, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 60
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 61, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586044800000, 
        "件数" : 32, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 61
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 62, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586044800000, 
        "件数" : 29, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 62
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 63, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586044800000, 
        "件数" : 44, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 63
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 64, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586044800000, 
        "件数" : 17, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 64
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 65, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586044800000, 
        "件数" : 9, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 65
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 66, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586044800000, 
        "件数" : 5, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 66
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 67, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586044800000, 
        "件数" : 15, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 67
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 68, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586044800000, 
        "件数" : 39, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 68
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 69, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586044800000, 
        "件数" : 20, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 69
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 70, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586044800000, 
        "件数" : 18, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 70
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 71, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586044800000, 
        "件数" : 13, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 71
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 72, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586044800000, 
        "件数" : 6, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 72
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 73, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 73
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 74, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586044800000, 
        "件数" : 4, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 74
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 75, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586044800000, 
        "件数" : 8, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 75
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 76, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586044800000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 76
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 77, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586044800000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 77
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 78, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586044800000, 
        "件数" : 1, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 78
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 79, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586044800000, 
        "件数" : 3, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 79
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 80, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586044800000, 
        "件数" : 11, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 80
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 81, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586044800000, 
        "件数" : 2, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 81
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 82, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586044800000, 
        "件数" : 3, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 82
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 83, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586044800000, 
        "件数" : 6, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 83
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 84, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586044800000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 84
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 85, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 85
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 86, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 86
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 87, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 87
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 88, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586044800000, 
        "件数" : 3, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 88
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 89, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586044800000, 
        "件数" : 1, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 89
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 90, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586044800000, 
        "件数" : 1, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 90
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 91, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586044800000, 
        "件数" : 2, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 91
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 92, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586044800000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 92
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 93, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 93
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 94, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586044800000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 94
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 95, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586044800000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 95
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 96, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 96
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 97, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586044800000, 
        "件数" : 9, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 97
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 98, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 98
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 99, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 99
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 301, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 301
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 302, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 302
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 303, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 303
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 304, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 304
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 305, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 305
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 306, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 306
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 307, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 307
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 308, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 308
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 309, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 309
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 310, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586044800000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 310
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 311, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586131200000, 
        "件数" : 6, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 311
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 312, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586131200000, 
        "件数" : 25, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 312
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 313, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586131200000, 
        "件数" : 83, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 313
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 314, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586131200000, 
        "件数" : 60, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 314
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 315, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586131200000, 
        "件数" : 8, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 315
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 316, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586131200000, 
        "件数" : 29, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 316
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 317, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586131200000, 
        "件数" : 11, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 317
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 318, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586131200000, 
        "件数" : 22, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 318
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 319, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586131200000, 
        "件数" : 41, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 319
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 320, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586131200000, 
        "件数" : 42, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 320
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 321, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586131200000, 
        "件数" : 37, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 321
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 322, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586131200000, 
        "件数" : 104, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 322
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 323, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586131200000, 
        "件数" : 37, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 323
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 324, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586131200000, 
        "件数" : 33, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 324
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 325, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586131200000, 
        "件数" : 56, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 325
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 326, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586131200000, 
        "件数" : 20, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 326
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 327, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586131200000, 
        "件数" : 10, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 327
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 328, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586131200000, 
        "件数" : 6, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 328
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 329, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586131200000, 
        "件数" : 20, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 329
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 330, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586131200000, 
        "件数" : 42, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 330
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 331, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586131200000, 
        "件数" : 22, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 331
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 332, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586131200000, 
        "件数" : 19, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 332
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 333, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586131200000, 
        "件数" : 15, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 333
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 334, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586131200000, 
        "件数" : 9, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 334
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 335, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586131200000, 
        "件数" : 2, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 335
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 336, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586131200000, 
        "件数" : 4, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 336
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 337, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586131200000, 
        "件数" : 8, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 337
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 338, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586131200000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 338
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 339, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586131200000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 339
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 340, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586131200000, 
        "件数" : 2, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 340
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 341, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586131200000, 
        "件数" : 4, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 341
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 342, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586131200000, 
        "件数" : 14, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 342
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 343, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586131200000, 
        "件数" : 3, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 343
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 344, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586131200000, 
        "件数" : 3, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 344
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 345, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586131200000, 
        "件数" : 6, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 345
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 346, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586131200000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 346
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 347, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 347
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 348, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 348
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 349, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 349
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 350, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586131200000, 
        "件数" : 3, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 350
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 351, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586131200000, 
        "件数" : 1, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 351
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 352, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586131200000, 
        "件数" : 1, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 352
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 353, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586131200000, 
        "件数" : 2, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 353
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 354, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586131200000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 354
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 355, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 355
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 356, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586131200000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 356
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 357, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586131200000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 357
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 358, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586131200000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 358
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 359, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586131200000, 
        "件数" : 10, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 359
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 360, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 360
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 361, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 361
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 362, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 362
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 363, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 363
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 364, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 364
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 365, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 365
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 366, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 366
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 367, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 367
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 368, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 368
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 369, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 369
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 370, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 370
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 371, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 371
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 372, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586131200000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 372
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 373, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586217600000, 
        "件数" : 7, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 373
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 374, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586217600000, 
        "件数" : 28, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 374
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 375, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586217600000, 
        "件数" : 87, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 375
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 376, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586217600000, 
        "件数" : 72, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 376
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 377, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586217600000, 
        "件数" : 8, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 377
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 378, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586217600000, 
        "件数" : 31, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 378
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 379, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586217600000, 
        "件数" : 11, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 379
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 380, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586217600000, 
        "件数" : 22, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 380
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 381, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586217600000, 
        "件数" : 41, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 381
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 382, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586217600000, 
        "件数" : 44, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 382
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 383, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586217600000, 
        "件数" : 44, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 383
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 384, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586217600000, 
        "件数" : 113, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 384
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 385, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586217600000, 
        "件数" : 39, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 385
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 386, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586217600000, 
        "件数" : 41, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 386
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 387, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586217600000, 
        "件数" : 60, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 387
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 388, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586217600000, 
        "件数" : 20, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 388
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 389, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586217600000, 
        "件数" : 10, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 389
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 390, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586217600000, 
        "件数" : 7, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 390
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 391, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586217600000, 
        "件数" : 23, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 391
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 392, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586217600000, 
        "件数" : 46, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 392
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 393, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586217600000, 
        "件数" : 25, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 393
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 394, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586217600000, 
        "件数" : 26, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 394
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 395, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586217600000, 
        "件数" : 16, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 395
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 396, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586217600000, 
        "件数" : 9, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 396
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 397, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586217600000, 
        "件数" : 2, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 397
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 398, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586217600000, 
        "件数" : 5, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 398
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 399, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586217600000, 
        "件数" : 8, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 399
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 400, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586217600000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 400
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 201, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586217600000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 201
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 202, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586217600000, 
        "件数" : 2, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 202
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 203, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586217600000, 
        "件数" : 4, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 203
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 204, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586217600000, 
        "件数" : 16, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 204
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 205, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586217600000, 
        "件数" : 3, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 205
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 206, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586217600000, 
        "件数" : 3, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 206
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 207, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586217600000, 
        "件数" : 8, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 207
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 208, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586217600000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 208
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 209, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 209
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 210, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 210
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 211, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 211
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 212, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586217600000, 
        "件数" : 3, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 212
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 213, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586217600000, 
        "件数" : 2, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 213
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 214, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586217600000, 
        "件数" : 1, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 214
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 215, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586217600000, 
        "件数" : 2, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 215
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 216, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586217600000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 216
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 217, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 217
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 218, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586217600000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 218
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 219, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586217600000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 219
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 220, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586217600000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 220
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 221, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586217600000, 
        "件数" : 9, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 221
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 222, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 222
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 223, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 223
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 224, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 224
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 225, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 225
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 226, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 226
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 227, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 227
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 228, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 228
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 229, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 229
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 230, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 230
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 231, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 231
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 232, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 232
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 233, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 233
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 234, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586217600000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 234
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 235, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586304000000, 
        "件数" : 9, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 235
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 236, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586304000000, 
        "件数" : 29, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 236
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 237, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586304000000, 
        "件数" : 89, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 237
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 238, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586304000000, 
        "件数" : 80, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 238
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 239, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586304000000, 
        "件数" : 10, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 239
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 240, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586304000000, 
        "件数" : 32, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 240
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 241, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586304000000, 
        "件数" : 14, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 241
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 242, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586304000000, 
        "件数" : 23, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 242
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 243, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586304000000, 
        "件数" : 49, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 243
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 244, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586304000000, 
        "件数" : 49, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 244
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 245, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586304000000, 
        "件数" : 45, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 245
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 246, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586304000000, 
        "件数" : 118, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 246
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 247, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586304000000, 
        "件数" : 41, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 247
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 248, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586304000000, 
        "件数" : 43, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 248
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 249, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586304000000, 
        "件数" : 67, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 249
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 250, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586304000000, 
        "件数" : 27, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 250
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 251, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586304000000, 
        "件数" : 11, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 251
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 252, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586304000000, 
        "件数" : 7, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 252
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 253, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586304000000, 
        "件数" : 24, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 253
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 254, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586304000000, 
        "件数" : 48, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 254
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 255, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586304000000, 
        "件数" : 27, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 255
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 256, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586304000000, 
        "件数" : 29, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 256
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 257, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586304000000, 
        "件数" : 16, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 257
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 258, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586304000000, 
        "件数" : 10, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 258
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 259, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586304000000, 
        "件数" : 3, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 259
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 260, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586304000000, 
        "件数" : 5, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 260
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 261, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586304000000, 
        "件数" : 9, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 261
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 262, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586304000000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 262
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 263, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586304000000, 
        "件数" : 1, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 263
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 264, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586304000000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 264
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 265, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586304000000, 
        "件数" : 5, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 265
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 266, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586304000000, 
        "件数" : 16, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 266
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 267, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586304000000, 
        "件数" : 4, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 267
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 268, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586304000000, 
        "件数" : 3, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 268
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 269, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586304000000, 
        "件数" : 8, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 269
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 270, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586304000000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 270
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 271, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 271
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 272, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 272
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 273, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 273
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 274, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586304000000, 
        "件数" : 3, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 274
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 275, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586304000000, 
        "件数" : 2, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 275
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 276, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586304000000, 
        "件数" : 1, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 276
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 277, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586304000000, 
        "件数" : 2, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 277
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 278, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586304000000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 278
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 279, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 279
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 280, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586304000000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 280
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 281, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586304000000, 
        "件数" : 3, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 281
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 282, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586304000000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 282
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 283, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586304000000, 
        "件数" : 9, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 283
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 284, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 284
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 285, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 285
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 286, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 286
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 287, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 287
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 288, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 288
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 289, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 289
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 290, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 290
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 291, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 291
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 292, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 292
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 293, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 293
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 294, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 294
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 295, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 295
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 296, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586304000000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 296
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 297, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586390400000, 
        "件数" : 9, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 297
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 298, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586390400000, 
        "件数" : 31, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 298
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 299, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586390400000, 
        "件数" : 107, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 299
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 300, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586390400000, 
        "件数" : 84, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 300
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 401, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586390400000, 
        "件数" : 12, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 401
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 402, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586390400000, 
        "件数" : 35, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 402
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 403, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586390400000, 
        "件数" : 14, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 403
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 404, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586390400000, 
        "件数" : 26, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 404
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 405, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586390400000, 
        "件数" : 56, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 405
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 406, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586390400000, 
        "件数" : 51, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 406
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 407, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586390400000, 
        "件数" : 51, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 407
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 408, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586390400000, 
        "件数" : 124, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 408
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 409, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586390400000, 
        "件数" : 49, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 409
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 410, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586390400000, 
        "件数" : 46, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 410
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 411, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586390400000, 
        "件数" : 76, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 411
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 412, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586390400000, 
        "件数" : 31, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 412
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 413, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586390400000, 
        "件数" : 13, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 413
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 414, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586390400000, 
        "件数" : 7, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 414
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 415, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586390400000, 
        "件数" : 30, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 415
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 416, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586390400000, 
        "件数" : 48, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 416
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 417, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586390400000, 
        "件数" : 28, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 417
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 418, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586390400000, 
        "件数" : 29, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 418
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 419, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586390400000, 
        "件数" : 18, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 419
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 420, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586390400000, 
        "件数" : 11, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 420
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 421, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586390400000, 
        "件数" : 3, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 421
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 422, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586390400000, 
        "件数" : 5, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 422
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 423, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586390400000, 
        "件数" : 12, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 423
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 424, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586390400000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 424
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 425, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586390400000, 
        "件数" : 5, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 425
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 426, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586390400000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 426
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 427, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586390400000, 
        "件数" : 6, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 427
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 428, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586390400000, 
        "件数" : 20, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 428
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 429, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586390400000, 
        "件数" : 5, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 429
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 430, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586390400000, 
        "件数" : 5, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 430
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 431, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586390400000, 
        "件数" : 8, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 431
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 432, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586390400000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 432
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 433, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586390400000, 
        "件数" : 2, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 433
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 434, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 434
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 435, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 435
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 436, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586390400000, 
        "件数" : 5, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 436
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 437, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586390400000, 
        "件数" : 3, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 437
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 438, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586390400000, 
        "件数" : 1, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 438
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 439, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586390400000, 
        "件数" : 2, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 439
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 441, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586390400000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 441
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 442, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 442
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 443, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586390400000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 443
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 444, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586390400000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 444
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 445, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586390400000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 445
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 446, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586390400000, 
        "件数" : 10, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 446
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 447, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 447
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 448, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 448
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 449, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 449
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 450, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 450
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 451, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 451
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 452, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 452
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 453, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 453
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 454, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 454
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 455, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 455
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 456, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 456
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 457, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 457
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 458, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 458
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 459, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586390400000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 459
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 460, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586476800000, 
        "件数" : 9, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 460
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 461, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586476800000, 
        "件数" : 31, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 461
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 462, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586476800000, 
        "件数" : 126, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 462
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 463, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586476800000, 
        "件数" : 99, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 463
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 464, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586476800000, 
        "件数" : 16, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 464
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 465, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586476800000, 
        "件数" : 40, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 465
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 466, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586476800000, 
        "件数" : 21, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 466
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 467, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586476800000, 
        "件数" : 39, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 467
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 468, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586476800000, 
        "件数" : 56, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 468
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 469, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586476800000, 
        "件数" : 54, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 469
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 470, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586476800000, 
        "件数" : 52, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 470
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 471, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586476800000, 
        "件数" : 147, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 471
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 472, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586476800000, 
        "件数" : 53, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 472
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 473, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586476800000, 
        "件数" : 50, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 473
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 474, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586476800000, 
        "件数" : 77, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 474
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 475, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586476800000, 
        "件数" : 39, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 475
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 476, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586476800000, 
        "件数" : 16, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 476
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 477, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586476800000, 
        "件数" : 8, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 477
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 478, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586476800000, 
        "件数" : 32, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 478
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 479, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586476800000, 
        "件数" : 52, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 479
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 480, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586476800000, 
        "件数" : 33, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 480
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 481, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586476800000, 
        "件数" : 34, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 481
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 482, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586476800000, 
        "件数" : 21, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 482
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 483, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586476800000, 
        "件数" : 11, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 483
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 484, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586476800000, 
        "件数" : 5, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 484
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 485, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586476800000, 
        "件数" : 5, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 485
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 486, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586476800000, 
        "件数" : 12, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 486
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 487, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586476800000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 487
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 488, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586476800000, 
        "件数" : 6, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 488
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 489, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586476800000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 489
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 490, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586476800000, 
        "件数" : 8, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 490
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 491, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586476800000, 
        "件数" : 20, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 491
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 492, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586476800000, 
        "件数" : 5, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 492
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 493, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586476800000, 
        "件数" : 6, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 493
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 494, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586476800000, 
        "件数" : 9, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 494
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 495, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586476800000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 495
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 496, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586476800000, 
        "件数" : 3, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 496
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 497, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586476800000, 
        "件数" : 2, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 497
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 498, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 498
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 499, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586476800000, 
        "件数" : 5, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 499
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 500, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586476800000, 
        "件数" : 3, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 500
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 501, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586476800000, 
        "件数" : 2, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 501
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 440, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586476800000, 
        "件数" : 2, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 440
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 502, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586476800000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 502
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 503, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 503
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 504, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586476800000, 
        "件数" : 3, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 504
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 505, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586476800000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 505
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 506, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586476800000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 506
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 507, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586476800000, 
        "件数" : 10, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 507
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 508, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 508
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 509, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 509
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 510, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 510
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 511, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 511
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 512, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 512
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 513, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 513
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 514, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 514
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 515, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 515
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 516, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 516
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 517, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 517
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 518, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 518
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 519, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 519
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 520, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586476800000, 
        "件数" : 0, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 520
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 521, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586563200000, 
        "件数" : 10, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 521
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 522, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586563200000, 
        "件数" : 33, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 522
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 523, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586563200000, 
        "件数" : 143, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 523
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 524, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586563200000, 
        "件数" : 133, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 524
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 525, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586563200000, 
        "件数" : 20, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 525
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 526, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586563200000, 
        "件数" : 42, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 526
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 527, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586563200000, 
        "件数" : 24, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 527
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 528, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586563200000, 
        "件数" : 44, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 528
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 529, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586563200000, 
        "件数" : 70, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 529
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 530, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586563200000, 
        "件数" : 56, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 530
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 531, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586563200000, 
        "件数" : 58, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 531
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 532, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586563200000, 
        "件数" : 173, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 532
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 533, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586563200000, 
        "件数" : 64, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 533
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 534, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586563200000, 
        "件数" : 53, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 534
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 535, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586563200000, 
        "件数" : 85, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 535
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 536, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586563200000, 
        "件数" : 45, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 536
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 537, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586563200000, 
        "件数" : 17, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 537
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 538, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586563200000, 
        "件数" : 10, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 538
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 539, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586563200000, 
        "件数" : 37, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 539
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 540, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586563200000, 
        "件数" : 54, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 540
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 541, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586563200000, 
        "件数" : 35, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 541
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 542, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586563200000, 
        "件数" : 35, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 542
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 543, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586563200000, 
        "件数" : 25, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 543
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 544, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586563200000, 
        "件数" : 13, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 544
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 545, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586563200000, 
        "件数" : 5, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 545
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 546, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586563200000, 
        "件数" : 6, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 546
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 547, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586563200000, 
        "件数" : 12, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 547
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 548, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586563200000, 
        "件数" : 1, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 548
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 549, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586563200000, 
        "件数" : 6, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 549
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 550, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586563200000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 550
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 551, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586563200000, 
        "件数" : 9, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 551
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 552, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586563200000, 
        "件数" : 20, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 552
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 553, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586563200000, 
        "件数" : 8, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 553
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 554, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586563200000, 
        "件数" : 6, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 554
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 555, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586563200000, 
        "件数" : 10, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 555
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 556, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586563200000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 556
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 557, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586563200000, 
        "件数" : 3, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 557
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 558, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586563200000, 
        "件数" : 2, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 558
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 559, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 559
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 560, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586563200000, 
        "件数" : 6, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 560
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 561, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586563200000, 
        "件数" : 4, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 561
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 562, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586563200000, 
        "件数" : 3, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 562
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 563, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586563200000, 
        "件数" : 3, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 563
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 564, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586563200000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 564
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 565, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 565
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 566, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586563200000, 
        "件数" : 4, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 566
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 567, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586563200000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 567
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 568, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586563200000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 568
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 569, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586563200000, 
        "件数" : 10, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 569
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 570, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 570
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 571, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 571
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 572, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 572
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 573, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 573
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 574, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 574
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 575, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 575
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 576, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 576
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 577, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 577
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 578, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 578
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 579, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 579
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 580, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 580
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 581, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 581
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 582, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586563200000, 
        "件数" : 0, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 582
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 583, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586649600000, 
        "件数" : 10, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 583
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 584, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586649600000, 
        "件数" : 35, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 584
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 585, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586649600000, 
        "件数" : 155, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 585
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 586, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586649600000, 
        "件数" : 139, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 586
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 587, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586649600000, 
        "件数" : 22, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 587
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 588, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586649600000, 
        "件数" : 46, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 588
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 589, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586649600000, 
        "件数" : 25, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 589
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 590, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586649600000, 
        "件数" : 51, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 590
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 591, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586649600000, 
        "件数" : 84, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 591
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 592, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586649600000, 
        "件数" : 58, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 592
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 593, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586649600000, 
        "件数" : 62, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 593
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 594, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586649600000, 
        "件数" : 191, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 594
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 595, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586649600000, 
        "件数" : 69, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 595
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 596, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586649600000, 
        "件数" : 62, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 596
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 597, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586649600000, 
        "件数" : 92, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 597
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 598, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586649600000, 
        "件数" : 49, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 598
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 599, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586649600000, 
        "件数" : 19, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 599
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 600, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586649600000, 
        "件数" : 11, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 600
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 701, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586649600000, 
        "件数" : 38, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 701
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 702, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586649600000, 
        "件数" : 60, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 702
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 703, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586649600000, 
        "件数" : 44, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 703
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 704, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586649600000, 
        "件数" : 44, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 704
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 705, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586649600000, 
        "件数" : 39, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 705
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 706, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586649600000, 
        "件数" : 15, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 706
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 707, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586649600000, 
        "件数" : 8, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 707
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 708, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586649600000, 
        "件数" : 7, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 708
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 709, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586649600000, 
        "件数" : 13, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 709
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 710, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586649600000, 
        "件数" : 2, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 710
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 711, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586649600000, 
        "件数" : 10, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 711
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 712, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586649600000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 712
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 713, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586649600000, 
        "件数" : 12, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 713
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 714, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586649600000, 
        "件数" : 21, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 714
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 715, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586649600000, 
        "件数" : 8, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 715
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 716, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586649600000, 
        "件数" : 6, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 716
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 717, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586649600000, 
        "件数" : 11, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 717
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 718, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586649600000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 718
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 719, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586649600000, 
        "件数" : 3, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 719
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 720, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586649600000, 
        "件数" : 2, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 720
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 721, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 721
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 722, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586649600000, 
        "件数" : 7, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 722
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 723, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586649600000, 
        "件数" : 4, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 723
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 724, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586649600000, 
        "件数" : 3, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 724
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 725, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586649600000, 
        "件数" : 3, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 725
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 726, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586649600000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 726
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 727, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586649600000, 
        "件数" : 5, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 727
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 728, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586649600000, 
        "件数" : 4, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 728
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 729, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586649600000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 729
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 730, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586649600000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 730
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 731, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586649600000, 
        "件数" : 11, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 731
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 732, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 732
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 733, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 733
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 734, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 734
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 735, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 735
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 736, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 736
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 737, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 737
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 738, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 738
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 739, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 739
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 740, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 740
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 741, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 741
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 742, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 742
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 743, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 743
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 744, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586649600000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 744
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 745, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586736000000, 
        "件数" : 11, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 745
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 746, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586736000000, 
        "件数" : 36, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 746
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 747, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586736000000, 
        "件数" : 158, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 747
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 748, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586736000000, 
        "件数" : 164, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 748
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 749, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586736000000, 
        "件数" : 23, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 749
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 750, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586736000000, 
        "件数" : 47, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 750
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 751, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586736000000, 
        "件数" : 26, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 751
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 752, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586736000000, 
        "件数" : 51, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 752
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 753, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586736000000, 
        "件数" : 90, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 753
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 754, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586736000000, 
        "件数" : 63, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 754
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 755, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586736000000, 
        "件数" : 66, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 755
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 756, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586736000000, 
        "件数" : 195, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 756
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 757, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586736000000, 
        "件数" : 71, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 757
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 758, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586736000000, 
        "件数" : 66, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 758
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 759, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586736000000, 
        "件数" : 92, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 759
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 760, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586736000000, 
        "件数" : 49, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 760
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 761, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586736000000, 
        "件数" : 20, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 761
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 762, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586736000000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 762
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 763, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586736000000, 
        "件数" : 46, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 763
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 764, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586736000000, 
        "件数" : 59, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 764
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 765, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586736000000, 
        "件数" : 45, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 765
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 766, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586736000000, 
        "件数" : 44, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 766
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 767, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586736000000, 
        "件数" : 43, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 767
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 768, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586736000000, 
        "件数" : 16, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 768
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 769, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586736000000, 
        "件数" : 8, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 769
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 770, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586736000000, 
        "件数" : 7, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 770
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 771, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586736000000, 
        "件数" : 13, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 771
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 772, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586736000000, 
        "件数" : 2, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 772
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 773, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586736000000, 
        "件数" : 10, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 773
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 774, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586736000000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 774
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 775, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586736000000, 
        "件数" : 12, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 775
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 776, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586736000000, 
        "件数" : 22, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 776
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 777, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586736000000, 
        "件数" : 8, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 777
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 778, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586736000000, 
        "件数" : 6, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 778
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 779, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586736000000, 
        "件数" : 11, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 779
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 780, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586736000000, 
        "件数" : 1, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 780
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 781, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586736000000, 
        "件数" : 3, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 781
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 782, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586736000000, 
        "件数" : 2, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 782
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 783, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 783
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 784, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586736000000, 
        "件数" : 7, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 784
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 785, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586736000000, 
        "件数" : 4, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 785
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 786, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586736000000, 
        "件数" : 5, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 786
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 787, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586736000000, 
        "件数" : 5, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 787
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 788, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586736000000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 788
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 789, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586736000000, 
        "件数" : 5, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 789
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 790, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586736000000, 
        "件数" : 4, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 790
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 791, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586736000000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 791
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 792, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586736000000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 792
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 793, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586736000000, 
        "件数" : 11, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 793
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 794, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 794
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 795, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 795
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 796, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 796
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 797, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 797
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 798, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 798
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 799, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 799
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 800, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 800
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 809, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 809
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 902, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 902
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 903, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 903
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 904, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 904
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 905, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 905
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 906, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586736000000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 906
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 907, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586822400000, 
        "件数" : 12, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 907
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 908, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586822400000, 
        "件数" : 39, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 908
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 909, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586822400000, 
        "件数" : 163, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 909
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 910, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586822400000, 
        "件数" : 177, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 910
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 911, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586822400000, 
        "件数" : 23, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 911
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 912, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586822400000, 
        "件数" : 47, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 912
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 913, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586822400000, 
        "件数" : 28, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 913
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 914, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586822400000, 
        "件数" : 52, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 914
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 915, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586822400000, 
        "件数" : 94, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 915
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 916, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586822400000, 
        "件数" : 72, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 916
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 917, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586822400000, 
        "件数" : 67, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 917
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 918, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586822400000, 
        "件数" : 205, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 918
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 919, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586822400000, 
        "件数" : 72, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 919
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 920, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586822400000, 
        "件数" : 67, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 920
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 921, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586822400000, 
        "件数" : 97, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 921
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 922, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586822400000, 
        "件数" : 49, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 922
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 923, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586822400000, 
        "件数" : 23, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 923
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 924, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586822400000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 924
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 925, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586822400000, 
        "件数" : 47, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 925
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 926, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586822400000, 
        "件数" : 60, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 926
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 927, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586822400000, 
        "件数" : 46, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 927
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 928, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586822400000, 
        "件数" : 44, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 928
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 929, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586822400000, 
        "件数" : 43, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 929
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 930, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586822400000, 
        "件数" : 19, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 930
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 931, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586822400000, 
        "件数" : 8, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 931
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 932, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586822400000, 
        "件数" : 7, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 932
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 933, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586822400000, 
        "件数" : 14, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 933
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 934, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586822400000, 
        "件数" : 2, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 934
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 935, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586822400000, 
        "件数" : 14, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 935
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 936, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586822400000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 936
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 937, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586822400000, 
        "件数" : 13, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 937
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 938, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586822400000, 
        "件数" : 23, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 938
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 939, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586822400000, 
        "件数" : 8, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 939
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 940, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586822400000, 
        "件数" : 6, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 940
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 941, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586822400000, 
        "件数" : 12, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 941
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 942, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586822400000, 
        "件数" : 3, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 942
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 943, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586822400000, 
        "件数" : 3, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 943
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 944, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586822400000, 
        "件数" : 3, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 944
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 945, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 945
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 946, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586822400000, 
        "件数" : 7, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 946
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 947, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586822400000, 
        "件数" : 4, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 947
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 948, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586822400000, 
        "件数" : 6, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 948
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 949, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586822400000, 
        "件数" : 6, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 949
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 950, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586822400000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 950
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 951, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586822400000, 
        "件数" : 7, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 951
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 952, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586822400000, 
        "件数" : 5, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 952
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 953, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586822400000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 953
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 954, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586822400000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 954
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 955, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586822400000, 
        "件数" : 13, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 955
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 956, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 956
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 957, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 957
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 958, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 958
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 959, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 959
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 960, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 960
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 961, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 961
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 962, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 962
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 963, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 963
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 964, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 964
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 965, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 965
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 966, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 966
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 967, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 967
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 968, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586822400000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 968
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 969, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586908800000, 
        "件数" : 12, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 969
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 970, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586908800000, 
        "件数" : 51, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 970
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 971, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586908800000, 
        "件数" : 168, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 971
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 972, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586908800000, 
        "件数" : 180, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 972
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 973, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586908800000, 
        "件数" : 26, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 973
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 974, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586908800000, 
        "件数" : 49, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 974
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 975, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586908800000, 
        "件数" : 35, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 975
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 976, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586908800000, 
        "件数" : 56, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 976
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 977, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586908800000, 
        "件数" : 104, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 977
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 978, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586908800000, 
        "件数" : 76, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 978
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 979, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586908800000, 
        "件数" : 71, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 979
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 980, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586908800000, 
        "件数" : 234, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 980
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 981, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586908800000, 
        "件数" : 81, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 981
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 982, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586908800000, 
        "件数" : 70, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 982
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 983, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586908800000, 
        "件数" : 107, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 983
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 984, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586908800000, 
        "件数" : 62, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 984
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 985, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586908800000, 
        "件数" : 30, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 985
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 986, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586908800000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 986
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 987, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586908800000, 
        "件数" : 50, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 987
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 988, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586908800000, 
        "件数" : 67, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 988
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 989, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586908800000, 
        "件数" : 50, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 989
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 990, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586908800000, 
        "件数" : 46, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 990
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 991, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586908800000, 
        "件数" : 47, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 991
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 992, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586908800000, 
        "件数" : 20, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 992
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 993, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586908800000, 
        "件数" : 8, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 993
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 994, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586908800000, 
        "件数" : 8, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 994
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 995, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586908800000, 
        "件数" : 14, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 995
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 996, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586908800000, 
        "件数" : 2, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 996
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 997, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586908800000, 
        "件数" : 15, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 997
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 998, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586908800000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 998
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 999, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586908800000, 
        "件数" : 15, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 999
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1000, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586908800000, 
        "件数" : 24, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1000
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 601, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586908800000, 
        "件数" : 8, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 601
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 602, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586908800000, 
        "件数" : 6, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 602
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 603, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586908800000, 
        "件数" : 12, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 603
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 604, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586908800000, 
        "件数" : 4, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 604
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 605, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586908800000, 
        "件数" : 3, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 605
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 606, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586908800000, 
        "件数" : 3, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 606
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 607, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 607
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 608, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586908800000, 
        "件数" : 7, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 608
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 609, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586908800000, 
        "件数" : 4, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 609
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 610, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586908800000, 
        "件数" : 6, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 610
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 611, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586908800000, 
        "件数" : 7, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 611
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 612, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586908800000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 612
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 613, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586908800000, 
        "件数" : 8, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 613
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 614, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586908800000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 614
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 615, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586908800000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 615
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 616, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586908800000, 
        "件数" : 1, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 616
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 617, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586908800000, 
        "件数" : 13, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 617
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 618, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 618
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 619, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 619
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 620, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 620
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 621, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 621
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 622, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 622
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 623, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 623
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 624, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 624
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 625, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 625
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 626, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 626
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 627, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 627
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 628, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 628
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 629, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 629
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 630, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586908800000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 630
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 631, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1586995200000, 
        "件数" : 16, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 631
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 632, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1586995200000, 
        "件数" : 53, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 632
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 633, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1586995200000, 
        "件数" : 172, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 633
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 634, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1586995200000, 
        "件数" : 187, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 634
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 635, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1586995200000, 
        "件数" : 28, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 635
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 636, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1586995200000, 
        "件数" : 49, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 636
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 637, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1586995200000, 
        "件数" : 37, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 637
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 638, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1586995200000, 
        "件数" : 57, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 638
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 639, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1586995200000, 
        "件数" : 104, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 639
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 640, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1586995200000, 
        "件数" : 80, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 640
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 641, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1586995200000, 
        "件数" : 77, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 641
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 642, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1586995200000, 
        "件数" : 243, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 642
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 643, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1586995200000, 
        "件数" : 89, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 643
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 644, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1586995200000, 
        "件数" : 77, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 644
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 645, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1586995200000, 
        "件数" : 115, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 645
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 646, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1586995200000, 
        "件数" : 65, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 646
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 647, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1586995200000, 
        "件数" : 30, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 647
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 648, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1586995200000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 648
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 649, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1586995200000, 
        "件数" : 51, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 649
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 650, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1586995200000, 
        "件数" : 80, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 650
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 651, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1586995200000, 
        "件数" : 51, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 651
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 652, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1586995200000, 
        "件数" : 48, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 652
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 653, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1586995200000, 
        "件数" : 52, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 653
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 654, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1586995200000, 
        "件数" : 21, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 654
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 655, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1586995200000, 
        "件数" : 8, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 655
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 656, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1586995200000, 
        "件数" : 10, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 656
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 657, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1586995200000, 
        "件数" : 16, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 657
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 658, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1586995200000, 
        "件数" : 2, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 658
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 659, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1586995200000, 
        "件数" : 20, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 659
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 660, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1586995200000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 660
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 661, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1586995200000, 
        "件数" : 20, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 661
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 662, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1586995200000, 
        "件数" : 25, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 662
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 663, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1586995200000, 
        "件数" : 8, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 663
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 664, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1586995200000, 
        "件数" : 8, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 664
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 665, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1586995200000, 
        "件数" : 12, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 665
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 666, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1586995200000, 
        "件数" : 4, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 666
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 667, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1586995200000, 
        "件数" : 5, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 667
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 668, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1586995200000, 
        "件数" : 3, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 668
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 669, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 669
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 670, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1586995200000, 
        "件数" : 8, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 670
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 671, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1586995200000, 
        "件数" : 4, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 671
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 672, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1586995200000, 
        "件数" : 6, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 672
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 673, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1586995200000, 
        "件数" : 11, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 673
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 674, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1586995200000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 674
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 675, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1586995200000, 
        "件数" : 12, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 675
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 676, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1586995200000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 676
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 677, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1586995200000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 677
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 678, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1586995200000, 
        "件数" : 2, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 678
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 679, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1586995200000, 
        "件数" : 13, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 679
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 680, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 680
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 681, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 681
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 682, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 682
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 683, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 683
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 684, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 684
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 685, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 685
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 686, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 686
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 687, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 687
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 688, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 688
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 689, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 689
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 690, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 690
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 691, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 691
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 692, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1586995200000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 692
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 693, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587081600000, 
        "件数" : 18, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 693
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 694, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587081600000, 
        "件数" : 56, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 694
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 695, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587081600000, 
        "件数" : 179, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 695
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 696, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587081600000, 
        "件数" : 205, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 696
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 697, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587081600000, 
        "件数" : 36, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 697
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 698, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587081600000, 
        "件数" : 53, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 698
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 699, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587081600000, 
        "件数" : 47, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 699
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 700, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587081600000, 
        "件数" : 59, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 700
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1001, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587081600000, 
        "件数" : 111, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1001
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1002, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587081600000, 
        "件数" : 83, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1002
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1003, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587081600000, 
        "件数" : 79, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1003
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1004, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587081600000, 
        "件数" : 247, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1004
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1005, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587081600000, 
        "件数" : 94, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1005
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1006, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587081600000, 
        "件数" : 79, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1006
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1007, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587081600000, 
        "件数" : 120, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1007
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1008, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587081600000, 
        "件数" : 71, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1008
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1009, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587081600000, 
        "件数" : 34, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1009
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1010, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587081600000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1010
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1011, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587081600000, 
        "件数" : 51, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1011
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1012, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587081600000, 
        "件数" : 88, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1012
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1013, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587081600000, 
        "件数" : 57, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1013
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1014, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587081600000, 
        "件数" : 59, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1014
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1015, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587081600000, 
        "件数" : 59, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1015
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1016, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587081600000, 
        "件数" : 22, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1016
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1017, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587081600000, 
        "件数" : 9, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1017
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1018, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587081600000, 
        "件数" : 10, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1018
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1019, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587081600000, 
        "件数" : 18, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1019
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1020, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587081600000, 
        "件数" : 2, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1020
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1021, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587081600000, 
        "件数" : 20, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1021
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1022, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587081600000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1022
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1023, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587081600000, 
        "件数" : 22, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1023
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1024, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587081600000, 
        "件数" : 26, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1024
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1025, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587081600000, 
        "件数" : 8, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1025
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1026, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587081600000, 
        "件数" : 9, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1026
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1027, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587081600000, 
        "件数" : 12, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1027
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1028, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587081600000, 
        "件数" : 3, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1028
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1029, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587081600000, 
        "件数" : 5, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1029
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1030, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587081600000, 
        "件数" : 3, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1030
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1031, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1031
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1032, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587081600000, 
        "件数" : 9, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1032
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1033, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587081600000, 
        "件数" : 4, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1033
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1034, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587081600000, 
        "件数" : 6, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1034
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1035, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587081600000, 
        "件数" : 11, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1035
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1036, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587081600000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1036
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1037, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587081600000, 
        "件数" : 13, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1037
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1038, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587081600000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1038
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1039, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587081600000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1039
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1040, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587081600000, 
        "件数" : 2, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1040
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1041, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587081600000, 
        "件数" : 15, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1041
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1042, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1042
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1043, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1043
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1044, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1044
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1045, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1045
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1046, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1046
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1047, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1047
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1048, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1048
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1049, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1049
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1050, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1050
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1051, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1051
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1052, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1052
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1053, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1053
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1054, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587081600000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1054
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587168000000, 
        "件数" : 19, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587168000000, 
        "件数" : 58, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587168000000, 
        "件数" : 197, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587168000000, 
        "件数" : 219, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587168000000, 
        "件数" : 39, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587168000000, 
        "件数" : 53, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587168000000, 
        "件数" : 48, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587168000000, 
        "件数" : 65, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587168000000, 
        "件数" : 123, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587168000000, 
        "件数" : 92, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587168000000, 
        "件数" : 79, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587168000000, 
        "件数" : 259, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587168000000, 
        "件数" : 105, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587168000000, 
        "件数" : 82, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587168000000, 
        "件数" : 127, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587168000000, 
        "件数" : 79, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587168000000, 
        "件数" : 35, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587168000000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587168000000, 
        "件数" : 57, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587168000000, 
        "件数" : 90, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587168000000, 
        "件数" : 65, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587168000000, 
        "件数" : 64, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587168000000, 
        "件数" : 70, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587168000000, 
        "件数" : 23, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587168000000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587168000000, 
        "件数" : 12, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587168000000, 
        "件数" : 20, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587168000000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587168000000, 
        "件数" : 27, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587168000000, 
        "件数" : 3, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587168000000, 
        "件数" : 23, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587168000000, 
        "件数" : 28, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587168000000, 
        "件数" : 9, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587168000000, 
        "件数" : 9, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587168000000, 
        "件数" : 13, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587168000000, 
        "件数" : 4, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587168000000, 
        "件数" : 6, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587168000000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587168000000, 
        "件数" : 0, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587168000000, 
        "件数" : 9, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587168000000, 
        "件数" : 5, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587168000000, 
        "件数" : 9, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587168000000, 
        "件数" : 11, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587168000000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587168000000, 
        "件数" : 16, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587168000000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587168000000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587168000000, 
        "件数" : 2, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587168000000, 
        "件数" : 18, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587168000000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587168000000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587222000000, 
        "件数" : 19, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587222000000, 
        "件数" : 65, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587222000000, 
        "件数" : 208, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587222000000, 
        "件数" : 227, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587222000000, 
        "件数" : 41, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587222000000, 
        "件数" : 55, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587222000000, 
        "件数" : 51, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587222000000, 
        "件数" : 68, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587222000000, 
        "件数" : 130, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587222000000, 
        "件数" : 94, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587222000000, 
        "件数" : 90, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587222000000, 
        "件数" : 277, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587222000000, 
        "件数" : 113, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587222000000, 
        "件数" : 83, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587222000000, 
        "件数" : 134, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587222000000, 
        "件数" : 88, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587222000000, 
        "件数" : 44, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587222000000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587222000000, 
        "件数" : 64, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587222000000, 
        "件数" : 100, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587222000000, 
        "件数" : 69, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587222000000, 
        "件数" : 77, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587222000000, 
        "件数" : 77, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587222000000, 
        "件数" : 30, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587222000000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587222000000, 
        "件数" : 13, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587222000000, 
        "件数" : 20, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587222000000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587222000000, 
        "件数" : 28, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587222000000, 
        "件数" : 5, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587222000000, 
        "件数" : 24, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587222000000, 
        "件数" : 30, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587222000000, 
        "件数" : 9, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587222000000, 
        "件数" : 11, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587222000000, 
        "件数" : 13, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587222000000, 
        "件数" : 5, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587222000000, 
        "件数" : 6, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587222000000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587222000000, 
        "件数" : 0, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587222000000, 
        "件数" : 9, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587222000000, 
        "件数" : 5, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587222000000, 
        "件数" : 9, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587222000000, 
        "件数" : 11, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587222000000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587222000000, 
        "件数" : 19, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587222000000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587222000000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587222000000, 
        "件数" : 2, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587222000000, 
        "件数" : 19, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587222000000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587222000000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587308400000, 
        "件数" : 19, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587308400000, 
        "件数" : 67, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587308400000, 
        "件数" : 212, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587308400000, 
        "件数" : 227, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587308400000, 
        "件数" : 45, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587308400000, 
        "件数" : 59, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587308400000, 
        "件数" : 57, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587308400000, 
        "件数" : 73, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587308400000, 
        "件数" : 132, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587308400000, 
        "件数" : 97, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587308400000, 
        "件数" : 96, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587308400000, 
        "件数" : 293, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587308400000, 
        "件数" : 118, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587308400000, 
        "件数" : 90, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587308400000, 
        "件数" : 145, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587308400000, 
        "件数" : 88, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587308400000, 
        "件数" : 45, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587308400000, 
        "件数" : 13, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587308400000, 
        "件数" : 66, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587308400000, 
        "件数" : 101, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587308400000, 
        "件数" : 70, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587308400000, 
        "件数" : 78, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587308400000, 
        "件数" : 81, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587308400000, 
        "件数" : 31, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587308400000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587308400000, 
        "件数" : 14, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587308400000, 
        "件数" : 20, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587308400000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587308400000, 
        "件数" : 30, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587308400000, 
        "件数" : 6, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587308400000, 
        "件数" : 25, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587308400000, 
        "件数" : 31, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587308400000, 
        "件数" : 10, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587308400000, 
        "件数" : 12, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587308400000, 
        "件数" : 13, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587308400000, 
        "件数" : 5, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587308400000, 
        "件数" : 6, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587308400000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587308400000, 
        "件数" : 0, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587308400000, 
        "件数" : 10, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587308400000, 
        "件数" : 5, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587308400000, 
        "件数" : 10, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587308400000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587308400000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587308400000, 
        "件数" : 19, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587308400000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587308400000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587308400000, 
        "件数" : 3, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587308400000, 
        "件数" : 21, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587308400000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587308400000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    	{
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587394800000, 
        "件数" : 19, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587394800000, 
        "件数" : 68, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587394800000, 
        "件数" : 215, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587394800000, 
        "件数" : 255, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587394800000, 
        "件数" : 46, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587394800000, 
        "件数" : 59, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587394800000, 
        "件数" : 60, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587394800000, 
        "件数" : 75, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587394800000, 
        "件数" : 138, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587394800000, 
        "件数" : 101, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587394800000, 
        "件数" : 97, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587394800000, 
        "件数" : 305, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587394800000, 
        "件数" : 119, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587394800000, 
        "件数" : 90, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587394800000, 
        "件数" : 146, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587394800000, 
        "件数" : 88, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587394800000, 
        "件数" : 47, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587394800000, 
        "件数" : 14, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587394800000, 
        "件数" : 69, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587394800000, 
        "件数" : 112, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587394800000, 
        "件数" : 70, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587394800000, 
        "件数" : 80, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587394800000, 
        "件数" : 84, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587394800000, 
        "件数" : 33, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587394800000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587394800000, 
        "件数" : 14, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587394800000, 
        "件数" : 21, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587394800000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587394800000, 
        "件数" : 32, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587394800000, 
        "件数" : 6, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587394800000, 
        "件数" : 26, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587394800000, 
        "件数" : 31, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587394800000, 
        "件数" : 10, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587394800000, 
        "件数" : 13, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587394800000, 
        "件数" : 14, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587394800000, 
        "件数" : 5, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587394800000, 
        "件数" : 6, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587394800000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587394800000, 
        "件数" : 0, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587394800000, 
        "件数" : 11, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587394800000, 
        "件数" : 5, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587394800000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587394800000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587394800000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587394800000, 
        "件数" : 19, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587394800000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587394800000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587394800000, 
        "件数" : 3, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587394800000, 
        "件数" : 25, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587394800000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587394800000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    	{
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587481200000, 
        "件数" : 19, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587481200000, 
        "件数" : 70, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587481200000, 
        "件数" : 224, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587481200000, 
        "件数" : 259, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587481200000, 
        "件数" : 50, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587481200000, 
        "件数" : 59, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587481200000, 
        "件数" : 64, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587481200000, 
        "件数" : 81, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587481200000, 
        "件数" : 141, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587481200000, 
        "件数" : 102, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587481200000, 
        "件数" : 100, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587481200000, 
        "件数" : 314, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587481200000, 
        "件数" : 132, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587481200000, 
        "件数" : 93, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587481200000, 
        "件数" : 154, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587481200000, 
        "件数" : 93, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587481200000, 
        "件数" : 51, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587481200000, 
        "件数" : 17, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587481200000, 
        "件数" : 75, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587481200000, 
        "件数" : 114, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587481200000, 
        "件数" : 76, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587481200000, 
        "件数" : 81, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587481200000, 
        "件数" : 87, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587481200000, 
        "件数" : 35, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587481200000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587481200000, 
        "件数" : 14, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587481200000, 
        "件数" : 22, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587481200000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587481200000, 
        "件数" : 33, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587481200000, 
        "件数" : 6, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587481200000, 
        "件数" : 26, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587481200000, 
        "件数" : 34, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587481200000, 
        "件数" : 10, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587481200000, 
        "件数" : 13, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587481200000, 
        "件数" : 16, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587481200000, 
        "件数" : 5, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587481200000, 
        "件数" : 7, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587481200000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587481200000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587481200000, 
        "件数" : 11, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587481200000, 
        "件数" : 5, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587481200000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587481200000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587481200000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587481200000, 
        "件数" : 21, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587481200000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587481200000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587481200000, 
        "件数" : 3, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587481200000, 
        "件数" : 26, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587481200000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587481200000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    	{
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587567600000, 
        "件数" : 22, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587567600000, 
        "件数" : 73, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587567600000, 
        "件数" : 238, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587567600000, 
        "件数" : 260, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587567600000, 
        "件数" : 51, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587567600000, 
        "件数" : 59, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587567600000, 
        "件数" : 67, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587567600000, 
        "件数" : 85, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587567600000, 
        "件数" : 145, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587567600000, 
        "件数" : 102, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587567600000, 
        "件数" : 109, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587567600000, 
        "件数" : 317, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587567600000, 
        "件数" : 133, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587567600000, 
        "件数" : 136, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587567600000, 
        "件数" : 158, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587567600000, 
        "件数" : 96, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587567600000, 
        "件数" : 53, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587567600000, 
        "件数" : 18, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587567600000, 
        "件数" : 76, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587567600000, 
        "件数" : 121, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587567600000, 
        "件数" : 77, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587567600000, 
        "件数" : 83, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587567600000, 
        "件数" : 90, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587567600000, 
        "件数" : 35, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587567600000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587567600000, 
        "件数" : 14, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587567600000, 
        "件数" : 23, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587567600000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587567600000, 
        "件数" : 33, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587567600000, 
        "件数" : 6, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587567600000, 
        "件数" : 27, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587567600000, 
        "件数" : 34, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587567600000, 
        "件数" : 10, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587567600000, 
        "件数" : 14, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587567600000, 
        "件数" : 16, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587567600000, 
        "件数" : 5, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587567600000, 
        "件数" : 7, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587567600000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587567600000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587567600000, 
        "件数" : 11, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587567600000, 
        "件数" : 5, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587567600000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587567600000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587567600000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587567600000, 
        "件数" : 21, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587567600000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587567600000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587567600000, 
        "件数" : 3, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587567600000, 
        "件数" : 26, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587567600000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587567600000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587654000000, 
        "件数" : 22, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587654000000, 
        "件数" : 74, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587654000000, 
        "件数" : 242, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587654000000, 
        "件数" : 267, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587654000000, 
        "件数" : 53, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587654000000, 
        "件数" : 60, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587654000000, 
        "件数" : 74, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587654000000, 
        "件数" : 88, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587654000000, 
        "件数" : 150, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587654000000, 
        "件数" : 103, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587654000000, 
        "件数" : 120, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587654000000, 
        "件数" : 326, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587654000000, 
        "件数" : 138, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587654000000, 
        "件数" : 145, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587654000000, 
        "件数" : 161, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587654000000, 
        "件数" : 104, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587654000000, 
        "件数" : 55, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587654000000, 
        "件数" : 20, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587654000000, 
        "件数" : 77, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587654000000, 
        "件数" : 125, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587654000000, 
        "件数" : 80, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587654000000, 
        "件数" : 87, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587654000000, 
        "件数" : 96, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587654000000, 
        "件数" : 35, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587654000000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587654000000, 
        "件数" : 14, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587654000000, 
        "件数" : 24, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587654000000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587654000000, 
        "件数" : 37, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587654000000, 
        "件数" : 6, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587654000000, 
        "件数" : 29, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587654000000, 
        "件数" : 34, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587654000000, 
        "件数" : 11, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587654000000, 
        "件数" : 14, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587654000000, 
        "件数" : 16, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587654000000, 
        "件数" : 5, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587654000000, 
        "件数" : 10, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587654000000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587654000000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587654000000, 
        "件数" : 11, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587654000000, 
        "件数" : 6, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587654000000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587654000000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587654000000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587654000000, 
        "件数" : 23, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587654000000, 
        "件数" : 6, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587654000000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587654000000, 
        "件数" : 4, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587654000000, 
        "件数" : 27, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587654000000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587654000000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587740400000, 
        "件数" : 23, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587740400000, 
        "件数" : 79, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587740400000, 
        "件数" : 251, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587740400000, 
        "件数" : 279, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587740400000, 
        "件数" : 54, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587740400000, 
        "件数" : 64, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587740400000, 
        "件数" : 78, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587740400000, 
        "件数" : 93, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587740400000, 
        "件数" : 153, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587740400000, 
        "件数" : 104, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587740400000, 
        "件数" : 138, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587740400000, 
        "件数" : 338, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587740400000, 
        "件数" : 142, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587740400000, 
        "件数" : 147, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587740400000, 
        "件数" : 165, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587740400000, 
        "件数" : 108, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587740400000, 
        "件数" : 60, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587740400000, 
        "件数" : 22, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587740400000, 
        "件数" : 81, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587740400000, 
        "件数" : 150, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587740400000, 
        "件数" : 86, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587740400000, 
        "件数" : 90, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587740400000, 
        "件数" : 100, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587740400000, 
        "件数" : 36, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587740400000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587740400000, 
        "件数" : 14, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587740400000, 
        "件数" : 24, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587740400000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587740400000, 
        "件数" : 40, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587740400000, 
        "件数" : 6, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587740400000, 
        "件数" : 30, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587740400000, 
        "件数" : 36, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587740400000, 
        "件数" : 12, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587740400000, 
        "件数" : 15, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587740400000, 
        "件数" : 16, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587740400000, 
        "件数" : 6, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587740400000, 
        "件数" : 10, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587740400000, 
        "件数" : 4, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587740400000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587740400000, 
        "件数" : 11, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587740400000, 
        "件数" : 6, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587740400000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587740400000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587740400000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587740400000, 
        "件数" : 24, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587740400000, 
        "件数" : 8, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587740400000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587740400000, 
        "件数" : 5, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587740400000, 
        "件数" : 28, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587740400000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587740400000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587826800000, 
        "件数" : 23, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587826800000, 
        "件数" : 79, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587826800000, 
        "件数" : 251, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587826800000, 
        "件数" : 282, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587826800000, 
        "件数" : 57, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587826800000, 
        "件数" : 65, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587826800000, 
        "件数" : 85, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587826800000, 
        "件数" : 95, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587826800000, 
        "件数" : 155, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587826800000, 
        "件数" : 109, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587826800000, 
        "件数" : 140, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587826800000, 
        "件数" : 349, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587826800000, 
        "件数" : 145, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587826800000, 
        "件数" : 148, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587826800000, 
        "件数" : 173, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587826800000, 
        "件数" : 109, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587826800000, 
        "件数" : 61, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587826800000, 
        "件数" : 22, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587826800000, 
        "件数" : 84, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587826800000, 
        "件数" : 157, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587826800000, 
        "件数" : 90, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587826800000, 
        "件数" : 93, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587826800000, 
        "件数" : 102, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587826800000, 
        "件数" : 38, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587826800000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587826800000, 
        "件数" : 15, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587826800000, 
        "件数" : 25, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587826800000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587826800000, 
        "件数" : 45, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587826800000, 
        "件数" : 7, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587826800000, 
        "件数" : 30, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587826800000, 
        "件数" : 39, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587826800000, 
        "件数" : 13, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587826800000, 
        "件数" : 16, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587826800000, 
        "件数" : 17, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587826800000, 
        "件数" : 6, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587826800000, 
        "件数" : 12, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587826800000, 
        "件数" : 5, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587826800000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587826800000, 
        "件数" : 12, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587826800000, 
        "件数" : 6, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587826800000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587826800000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587826800000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587826800000, 
        "件数" : 28, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587826800000, 
        "件数" : 9, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587826800000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587826800000, 
        "件数" : 6, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587826800000, 
        "件数" : 29, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587826800000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587826800000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587913200000, 
        "件数" : 23, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587913200000, 
        "件数" : 80, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587913200000, 
        "件数" : 261, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587913200000, 
        "件数" : 289, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587913200000, 
        "件数" : 59, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587913200000, 
        "件数" : 65, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587913200000, 
        "件数" : 86, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587913200000, 
        "件数" : 101, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587913200000, 
        "件数" : 156, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587913200000, 
        "件数" : 109, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587913200000, 
        "件数" : 140, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587913200000, 
        "件数" : 358, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587913200000, 
        "件数" : 147, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587913200000, 
        "件数" : 148, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587913200000, 
        "件数" : 176, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587913200000, 
        "件数" : 109, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587913200000, 
        "件数" : 61, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587913200000, 
        "件数" : 22, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587913200000, 
        "件数" : 85, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587913200000, 
        "件数" : 157, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587913200000, 
        "件数" : 90, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587913200000, 
        "件数" : 93, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587913200000, 
        "件数" : 107, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587913200000, 
        "件数" : 38, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587913200000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587913200000, 
        "件数" : 15, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587913200000, 
        "件数" : 25, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587913200000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587913200000, 
        "件数" : 46, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587913200000, 
        "件数" : 7, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587913200000, 
        "件数" : 31, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587913200000, 
        "件数" : 39, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587913200000, 
        "件数" : 14, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587913200000, 
        "件数" : 16, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587913200000, 
        "件数" : 17, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587913200000, 
        "件数" : 6, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587913200000, 
        "件数" : 11, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587913200000, 
        "件数" : 6, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587913200000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587913200000, 
        "件数" : 12, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587913200000, 
        "件数" : 6, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587913200000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587913200000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587913200000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587913200000, 
        "件数" : 28, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587913200000, 
        "件数" : 9, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587913200000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587913200000, 
        "件数" : 6, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587913200000, 
        "件数" : 30, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587913200000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587913200000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1587999600000, 
        "件数" : 23, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1587999600000, 
        "件数" : 84, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1587999600000, 
        "件数" : 261, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1587999600000, 
        "件数" : 296, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1587999600000, 
        "件数" : 59, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1587999600000, 
        "件数" : 65, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1587999600000, 
        "件数" : 87, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1587999600000, 
        "件数" : 101, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1587999600000, 
        "件数" : 156, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1587999600000, 
        "件数" : 115, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1587999600000, 
        "件数" : 140, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1587999600000, 
        "件数" : 366, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1587999600000, 
        "件数" : 149, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1587999600000, 
        "件数" : 151, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1587999600000, 
        "件数" : 177, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1587999600000, 
        "件数" : 109, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1587999600000, 
        "件数" : 61, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1587999600000, 
        "件数" : 22, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1587999600000, 
        "件数" : 86, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1587999600000, 
        "件数" : 157, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1587999600000, 
        "件数" : 90, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1587999600000, 
        "件数" : 93, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1587999600000, 
        "件数" : 107, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1587999600000, 
        "件数" : 38, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1587999600000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1587999600000, 
        "件数" : 15, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1587999600000, 
        "件数" : 25, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1587999600000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1587999600000, 
        "件数" : 46, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1587999600000, 
        "件数" : 7, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1587999600000, 
        "件数" : 31, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1587999600000, 
        "件数" : 40, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1587999600000, 
        "件数" : 14, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1587999600000, 
        "件数" : 16, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1587999600000, 
        "件数" : 17, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1587999600000, 
        "件数" : 7, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1587999600000, 
        "件数" : 11, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1587999600000, 
        "件数" : 6, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1587999600000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1587999600000, 
        "件数" : 12, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1587999600000, 
        "件数" : 6, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1587999600000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1587999600000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1587999600000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1587999600000, 
        "件数" : 28, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1587999600000, 
        "件数" : 9, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1587999600000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1587999600000, 
        "件数" : 6, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1587999600000, 
        "件数" : 31, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1587999600000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1587999600000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1588086000000, 
        "件数" : 24, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1588086000000, 
        "件数" : 87, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1588086000000, 
        "件数" : 264, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1588086000000, 
        "件数" : 299, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1588086000000, 
        "件数" : 60, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1588086000000, 
        "件数" : 66, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1588086000000, 
        "件数" : 93, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1588086000000, 
        "件数" : 104, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1588086000000, 
        "件数" : 161, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1588086000000, 
        "件数" : 115, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1588086000000, 
        "件数" : 142, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1588086000000, 
        "件数" : 377, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1588086000000, 
        "件数" : 152, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1588086000000, 
        "件数" : 152, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1588086000000, 
        "件数" : 182, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1588086000000, 
        "件数" : 116, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1588086000000, 
        "件数" : 68, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1588086000000, 
        "件数" : 22, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1588086000000, 
        "件数" : 86, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1588086000000, 
        "件数" : 162, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1588086000000, 
        "件数" : 95, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1588086000000, 
        "件数" : 95, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1588086000000, 
        "件数" : 111, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1588086000000, 
        "件数" : 39, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1588086000000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1588086000000, 
        "件数" : 15, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1588086000000, 
        "件数" : 25, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1588086000000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1588086000000, 
        "件数" : 49, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1588086000000, 
        "件数" : 7, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1588086000000, 
        "件数" : 31, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1588086000000, 
        "件数" : 41, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1588086000000, 
        "件数" : 14, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1588086000000, 
        "件数" : 16, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1588086000000, 
        "件数" : 18, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1588086000000, 
        "件数" : 7, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1588086000000, 
        "件数" : 11, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1588086000000, 
        "件数" : 6, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1588086000000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1588086000000, 
        "件数" : 12, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1588086000000, 
        "件数" : 6, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1588086000000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1588086000000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1588086000000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1588086000000, 
        "件数" : 28, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1588086000000, 
        "件数" : 9, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1588086000000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1588086000000, 
        "件数" : 7, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1588086000000, 
        "件数" : 31, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1588086000000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1588086000000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    },
    {
      "type" : "Feature", 
      "id" : 1055, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.753586, 35.694041
        ]
      }, 
      "properties" : {
        "自治体コード" : 13101, 
        "団体名" : "千代田区", 
        "公表日" : 1588172400000, 
        "件数" : 24, 
        "経度" : 139.753586, 
        "緯度" : 35.694041, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1055
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1056, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.772108, 35.670711
        ]
      }, 
      "properties" : {
        "自治体コード" : 13102, 
        "団体名" : "中央区", 
        "公表日" : 1588172400000, 
        "件数" : 87, 
        "経度" : 139.772108, 
        "緯度" : 35.670711, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1056
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1057, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.751405, 35.658073
        ]
      }, 
      "properties" : {
        "自治体コード" : 13103, 
        "団体名" : "港区", 
        "公表日" : 1588172400000, 
        "件数" : 266, 
        "経度" : 139.751405, 
        "緯度" : 35.658073, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1057
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1058, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.70341, 35.693887
        ]
      }, 
      "properties" : {
        "自治体コード" : 13104, 
        "団体名" : "新宿区", 
        "公表日" : 1588172400000, 
        "件数" : 299, 
        "経度" : 139.70341, 
        "緯度" : 35.693887, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1058
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1059, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.752216, 35.708053
        ]
      }, 
      "properties" : {
        "自治体コード" : 13105, 
        "団体名" : "文京区", 
        "公表日" : 1588172400000, 
        "件数" : 60, 
        "経度" : 139.752216, 
        "緯度" : 35.708053, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1059
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1060, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.779998, 35.712607
        ]
      }, 
      "properties" : {
        "自治体コード" : 13106, 
        "団体名" : "台東区", 
        "公表日" : 1588172400000, 
        "件数" : 66, 
        "経度" : 139.779998, 
        "緯度" : 35.712607, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1060
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1061, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.80156, 35.710407
        ]
      }, 
      "properties" : {
        "自治体コード" : 13107, 
        "団体名" : "墨田区", 
        "公表日" : 1588172400000, 
        "件数" : 95, 
        "経度" : 139.80156, 
        "緯度" : 35.710407, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1061
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1062, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.816968, 35.673078
        ]
      }, 
      "properties" : {
        "自治体コード" : 13108, 
        "団体名" : "江東区", 
        "公表日" : 1588172400000, 
        "件数" : 105, 
        "経度" : 139.816968, 
        "緯度" : 35.673078, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1062
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1063, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.730308, 35.608906
        ]
      }, 
      "properties" : {
        "自治体コード" : 13109, 
        "団体名" : "品川区", 
        "公表日" : 1588172400000, 
        "件数" : 165, 
        "経度" : 139.730308, 
        "緯度" : 35.608906, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1063
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1064, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.698188, 35.641418
        ]
      }, 
      "properties" : {
        "自治体コード" : 13110, 
        "団体名" : "目黒区", 
        "公表日" : 1588172400000, 
        "件数" : 115, 
        "経度" : 139.698188, 
        "緯度" : 35.641418, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1064
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1065, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716047, 35.5614
        ]
      }, 
      "properties" : {
        "自治体コード" : 13111, 
        "団体名" : "大田区", 
        "公表日" : 1588172400000, 
        "件数" : 146, 
        "経度" : 139.716047, 
        "緯度" : 35.5614, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1065
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1066, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.653249, 35.646575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13112, 
        "団体名" : "世田谷区", 
        "公表日" : 1588172400000, 
        "件数" : 379, 
        "経度" : 139.653249, 
        "緯度" : 35.646575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1066
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1067, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.697701, 35.663685
        ]
      }, 
      "properties" : {
        "自治体コード" : 13113, 
        "団体名" : "渋谷区", 
        "公表日" : 1588172400000, 
        "件数" : 153, 
        "経度" : 139.697701, 
        "緯度" : 35.663685, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1067
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1068, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.663838, 35.707398
        ]
      }, 
      "properties" : {
        "自治体コード" : 13114, 
        "団体名" : "中野区", 
        "公表日" : 1588172400000, 
        "件数" : 155, 
        "経度" : 139.663838, 
        "緯度" : 35.707398, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1068
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1069, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.636385, 35.699574
        ]
      }, 
      "properties" : {
        "自治体コード" : 13115, 
        "団体名" : "杉並区", 
        "公表日" : 1588172400000, 
        "件数" : 183, 
        "経度" : 139.636385, 
        "緯度" : 35.699574, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1069
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1070, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.716608, 35.726117
        ]
      }, 
      "properties" : {
        "自治体コード" : 13116, 
        "団体名" : "豊島区", 
        "公表日" : 1588172400000, 
        "件数" : 116, 
        "経度" : 139.716608, 
        "緯度" : 35.726117, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1070
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1071, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.734018, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13117, 
        "団体名" : "北区", 
        "公表日" : 1588172400000, 
        "件数" : 68, 
        "経度" : 139.734018, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1071
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1072, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.783336, 35.736144
        ]
      }, 
      "properties" : {
        "自治体コード" : 13118, 
        "団体名" : "荒川区", 
        "公表日" : 1588172400000, 
        "件数" : 27, 
        "経度" : 139.783336, 
        "緯度" : 35.736144, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1072
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1073, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.709246, 35.751164
        ]
      }, 
      "properties" : {
        "自治体コード" : 13119, 
        "団体名" : "板橋区", 
        "公表日" : 1588172400000, 
        "件数" : 89, 
        "経度" : 139.709246, 
        "緯度" : 35.751164, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1073
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1074, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.65166, 35.735623
        ]
      }, 
      "properties" : {
        "自治体コード" : 13120, 
        "団体名" : "練馬区", 
        "公表日" : 1588172400000, 
        "件数" : 162, 
        "経度" : 139.65166, 
        "緯度" : 35.735623, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1074
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1075, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.804501, 35.775633
        ]
      }, 
      "properties" : {
        "自治体コード" : 13121, 
        "団体名" : "足立区", 
        "公表日" : 1588172400000, 
        "件数" : 99, 
        "経度" : 139.804501, 
        "緯度" : 35.775633, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1075
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1076, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.847221, 35.743494
        ]
      }, 
      "properties" : {
        "自治体コード" : 13122, 
        "団体名" : "葛飾区", 
        "公表日" : 1588172400000, 
        "件数" : 96, 
        "経度" : 139.847221, 
        "緯度" : 35.743494, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1076
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1077, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.868326, 35.706978
        ]
      }, 
      "properties" : {
        "自治体コード" : 13123, 
        "団体名" : "江戸川区", 
        "公表日" : 1588172400000, 
        "件数" : 113, 
        "経度" : 139.868326, 
        "緯度" : 35.706978, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1077
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1078, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.315805, 35.666342
        ]
      }, 
      "properties" : {
        "自治体コード" : 13201, 
        "団体名" : "八王子市", 
        "公表日" : 1588172400000, 
        "件数" : 39, 
        "経度" : 139.315805, 
        "緯度" : 35.666342, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1078
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1079, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.407846, 35.714016
        ]
      }, 
      "properties" : {
        "自治体コード" : 13202, 
        "団体名" : "立川市", 
        "公表日" : 1588172400000, 
        "件数" : 13, 
        "経度" : 139.407846, 
        "緯度" : 35.714016, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1079
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1080, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.56626, 35.717784
        ]
      }, 
      "properties" : {
        "自治体コード" : 13203, 
        "団体名" : "武蔵野市", 
        "公表日" : 1588172400000, 
        "件数" : 16, 
        "経度" : 139.56626, 
        "緯度" : 35.717784, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1080
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1081, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.559723, 35.683276
        ]
      }, 
      "properties" : {
        "自治体コード" : 13204, 
        "団体名" : "三鷹市", 
        "公表日" : 1588172400000, 
        "件数" : 26, 
        "経度" : 139.559723, 
        "緯度" : 35.683276, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1081
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1082, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.275791, 35.78799
        ]
      }, 
      "properties" : {
        "自治体コード" : 13205, 
        "団体名" : "青梅市", 
        "公表日" : 1588172400000, 
        "件数" : 3, 
        "経度" : 139.275791, 
        "緯度" : 35.78799, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1082
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1083, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477611, 35.669184
        ]
      }, 
      "properties" : {
        "自治体コード" : 13206, 
        "団体名" : "府中市", 
        "公表日" : 1588172400000, 
        "件数" : 50, 
        "経度" : 139.477611, 
        "緯度" : 35.669184, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1083
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1084, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353548, 35.705755
        ]
      }, 
      "properties" : {
        "自治体コード" : 13207, 
        "団体名" : "昭島市", 
        "公表日" : 1588172400000, 
        "件数" : 7, 
        "経度" : 139.353548, 
        "緯度" : 35.705755, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1084
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1085, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.540993, 35.650716
        ]
      }, 
      "properties" : {
        "自治体コード" : 13208, 
        "団体名" : "調布市", 
        "公表日" : 1588172400000, 
        "件数" : 32, 
        "経度" : 139.540993, 
        "緯度" : 35.650716, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1085
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1086, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.438618, 35.54663
        ]
      }, 
      "properties" : {
        "自治体コード" : 13209, 
        "団体名" : "町田市", 
        "公表日" : 1588172400000, 
        "件数" : 41, 
        "経度" : 139.438618, 
        "緯度" : 35.54663, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1086
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1087, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.502996, 35.699465
        ]
      }, 
      "properties" : {
        "自治体コード" : 13210, 
        "団体名" : "小金井市", 
        "公表日" : 1588172400000, 
        "件数" : 14, 
        "経度" : 139.502996, 
        "緯度" : 35.699465, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1087
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1088, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.477522, 35.728433
        ]
      }, 
      "properties" : {
        "自治体コード" : 13211, 
        "団体名" : "小平市", 
        "公表日" : 1588172400000, 
        "件数" : 16, 
        "経度" : 139.477522, 
        "緯度" : 35.728433, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1088
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1089, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.394862, 35.671448
        ]
      }, 
      "properties" : {
        "自治体コード" : 13212, 
        "団体名" : "日野市", 
        "公表日" : 1588172400000, 
        "件数" : 18, 
        "経度" : 139.394862, 
        "緯度" : 35.671448, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1089
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1090, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.4683, 35.754566
        ]
      }, 
      "properties" : {
        "自治体コード" : 13213, 
        "団体名" : "東村山市", 
        "公表日" : 1588172400000, 
        "件数" : 7, 
        "経度" : 139.4683, 
        "緯度" : 35.754566, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1090
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1091, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.463188, 35.71034
        ]
      }, 
      "properties" : {
        "自治体コード" : 13214, 
        "団体名" : "国分寺市", 
        "公表日" : 1588172400000, 
        "件数" : 11, 
        "経度" : 139.463188, 
        "緯度" : 35.71034, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1091
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1092, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.441383, 35.683884
        ]
      }, 
      "properties" : {
        "自治体コード" : 13215, 
        "団体名" : "国立市", 
        "公表日" : 1588172400000, 
        "件数" : 6, 
        "経度" : 139.441383, 
        "緯度" : 35.683884, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1092
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1093, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.326688, 35.738747
        ]
      }, 
      "properties" : {
        "自治体コード" : 13218, 
        "団体名" : "福生市", 
        "公表日" : 1588172400000, 
        "件数" : 1, 
        "経度" : 139.326688, 
        "緯度" : 35.738747, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1093
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1094, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.578718, 35.63498
        ]
      }, 
      "properties" : {
        "自治体コード" : 13219, 
        "団体名" : "狛江市", 
        "公表日" : 1588172400000, 
        "件数" : 12, 
        "経度" : 139.578718, 
        "緯度" : 35.63498, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1094
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1095, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.426473, 35.745357
        ]
      }, 
      "properties" : {
        "自治体コード" : 13220, 
        "団体名" : "東大和市", 
        "公表日" : 1588172400000, 
        "件数" : 6, 
        "経度" : 139.426473, 
        "緯度" : 35.745357, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1095
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1096, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.526441, 35.78575
        ]
      }, 
      "properties" : {
        "自治体コード" : 13221, 
        "団体名" : "清瀬市", 
        "公表日" : 1588172400000, 
        "件数" : 11, 
        "経度" : 139.526441, 
        "緯度" : 35.78575, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1096
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1097, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.529853, 35.758159
        ]
      }, 
      "properties" : {
        "自治体コード" : 13222, 
        "団体名" : "東久留米市", 
        "公表日" : 1588172400000, 
        "件数" : 12, 
        "経度" : 139.529853, 
        "緯度" : 35.758159, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1097
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1098, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.387402, 35.754861
        ]
      }, 
      "properties" : {
        "自治体コード" : 13223, 
        "団体名" : "武蔵村山市", 
        "公表日" : 1588172400000, 
        "件数" : 1, 
        "経度" : 139.387402, 
        "緯度" : 35.754861, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1098
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1099, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.446284, 35.637031
        ]
      }, 
      "properties" : {
        "自治体コード" : 13224, 
        "団体名" : "多摩市", 
        "公表日" : 1588172400000, 
        "件数" : 28, 
        "経度" : 139.446284, 
        "緯度" : 35.637031, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1099
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1100, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.504566, 35.637926
        ]
      }, 
      "properties" : {
        "自治体コード" : 13225, 
        "団体名" : "稲城市", 
        "公表日" : 1588172400000, 
        "件数" : 9, 
        "経度" : 139.504566, 
        "緯度" : 35.637926, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1100
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1101, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.311016, 35.767138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13227, 
        "団体名" : "羽村市", 
        "公表日" : 1588172400000, 
        "件数" : 5, 
        "経度" : 139.311016, 
        "緯度" : 35.767138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1101
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1102, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.293697, 35.728898
        ]
      }, 
      "properties" : {
        "自治体コード" : 13228, 
        "団体名" : "あきる野市", 
        "公表日" : 1588172400000, 
        "件数" : 7, 
        "経度" : 139.293697, 
        "緯度" : 35.728898, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1102
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1103, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.538145, 35.725515
        ]
      }, 
      "properties" : {
        "自治体コード" : 13229, 
        "団体名" : "西東京市", 
        "公表日" : 1588172400000, 
        "件数" : 33, 
        "経度" : 139.538145, 
        "緯度" : 35.725515, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1103
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1104, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.353848, 35.772036
        ]
      }, 
      "properties" : {
        "自治体コード" : 13303, 
        "団体名" : "瑞穂町", 
        "公表日" : 1588172400000, 
        "件数" : 1, 
        "経度" : 139.353848, 
        "緯度" : 35.772036, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1104
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1105, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.257444, 35.742145
        ]
      }, 
      "properties" : {
        "自治体コード" : 13305, 
        "団体名" : "日の出町", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.257444, 
        "緯度" : 35.742145, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1105
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1106, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.148866, 35.726839
        ]
      }, 
      "properties" : {
        "自治体コード" : 13307, 
        "団体名" : "檜原村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.148866, 
        "緯度" : 35.726839, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1106
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1107, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.096199, 35.809546
        ]
      }, 
      "properties" : {
        "自治体コード" : 13308, 
        "団体名" : "奥多摩町", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.096199, 
        "緯度" : 35.809546, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1107
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1108, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.099702, 36.380425
        ]
      }, 
      "properties" : {
        "自治体コード" : 13361, 
        "団体名" : "大島町", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.099702, 
        "緯度" : 36.380425, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1108
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1109, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.281948, 34.529138
        ]
      }, 
      "properties" : {
        "自治体コード" : 13362, 
        "団体名" : "利島村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.281948, 
        "緯度" : 34.529138, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1109
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1110, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.256574, 34.377137
        ]
      }, 
      "properties" : {
        "自治体コード" : 13363, 
        "団体名" : "新島村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.256574, 
        "緯度" : 34.377137, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1110
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1111, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.134258, 34.205269
        ]
      }, 
      "properties" : {
        "自治体コード" : 13364, 
        "団体名" : "神津島村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.134258, 
        "緯度" : 34.205269, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1111
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1112, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.479747, 34.075776
        ]
      }, 
      "properties" : {
        "自治体コード" : 13381, 
        "団体名" : "三宅村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.479747, 
        "緯度" : 34.075776, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1112
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1113, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.596119, 33.897365
        ]
      }, 
      "properties" : {
        "自治体コード" : 13382, 
        "団体名" : "御蔵島村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.596119, 
        "緯度" : 33.897365, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1113
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1114, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.789067, 33.112742
        ]
      }, 
      "properties" : {
        "自治体コード" : 13401, 
        "団体名" : "八丈町", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.789067, 
        "緯度" : 33.112742, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1114
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1115, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          139.763314, 32.466459
        ]
      }, 
      "properties" : {
        "自治体コード" : 13402, 
        "団体名" : "青ヶ島村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 139.763314, 
        "緯度" : 32.466459, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1115
      }
    }, 
    {
      "type" : "Feature", 
      "id" : 1116, 
      "geometry" : 
      {
        "type" : "Point", 
        "coordinates" : [
          142.191907, 27.094358
        ]
      }, 
      "properties" : {
        "自治体コード" : 13421, 
        "団体名" : "小笠原村", 
        "公表日" : 1588172400000, 
        "件数" : null, 
        "経度" : 142.191907, 
        "緯度" : 27.094358, 
        "Column6" : null, 
        "Column7" : null, 
        "Column8" : null, 
        "Column9" : null, 
        "FID" : 1116
      }
    }
  ]
}
