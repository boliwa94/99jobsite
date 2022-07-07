import request from '@/utils/request' // axios導入

// 初期表示
export function b0601Init(companyId,
  userCd,
  briefingType,
  briefingDate,
  dateFrom,
  dateTo,
  statusFlg,
  briefingId,
  briefingIds) {
  console.log("b06js.request", request);
  return request({
    url: '/B0601/init',
    method: 'post',
    data: {
      companyId,
      userCd,
      briefingType,
      briefingDate,
      dateFrom,
      dateTo,
      statusFlg,
      briefingId,
      briefingIds
    }
  })
}
// 検索
//22/07/04 wuyz change start
//export function b0601Search(companyId, userCd, briefingType, briefingDate, statusFlg, dateFrom, dateTo, briefingId, briefingIds) {
export function b0601Search(companyId, userCd, briefingType, briefingDate, statusFlg, dateFrom, dateTo, briefingId, briefingIds, keyWord) {
//22/07/04 wuyz change end
  return request({
    url: '/B0601/init',
    method: 'post',
    data: {
      companyId,
      userCd,
      briefingType,
      briefingDate,
      statusFlg,
      dateFrom,
      dateTo,
      briefingId,
      briefingIds,
      //22/07/04 wuyz add start
      keyWord,
      //22/07/04 wuyz add end
    }
  })
}
// 削除
export function b0601Delete(
  briefingId,
  briefingIds
) {
  return request({
    url: '/B0601/delete',
    method: 'post',
    data: {
      briefingId,
      briefingIds
    }
  })
}

// 新規
export function sendBriefingInfo(
  companyId,
  userCd,
  briefingId,
  briefingNm,
  briefingType,
  briefingDate,
  dateFrom,
  dateTo,
  postal,
  prefeNm,
  briefingAddress1,
  briefingAddress2,
  briefingContent,
  proCntPlan,
  teaNm,
  teaIntro,
  tel,
  charge,
  photoAddress1,
  photoAddress2,
  photoAddress3,
  remarks,
  ) {
  return request({
    url: '/B0602/new',
    method: 'post',
    data: {
      companyId,
      userCd,
      briefingId,
      briefingNm,
      briefingType,
      briefingDate,
      dateFrom,
      dateTo,
      postal,
      prefeNm,
      briefingAddress1,
      briefingAddress2,
      briefingContent,
      proCntPlan,
      teaNm,
      teaIntro,
      tel,
      charge,
      photoAddress1,
      photoAddress2,
      photoAddress3,
      remarks,
    }
  })
}

// 検索
export function b0603Search(companyId, briefingId, name) {
  return request({
    url: '/B0603/briefingAppl',
    method: 'post',
    data: {
      companyId,
      briefingId,
      name
    }
  })
}