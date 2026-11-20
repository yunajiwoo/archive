// 앱 설정 파일이에요. 따옴표 안에 값을 붙여 넣으세요.
window.ARCHIVE_CONFIG = {
  // Supabase
  SUPABASE_URL: 'https://jbyqbnlueulfvjsctssn.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_mTrYK_ElWBW2QINbtKq8NQ_f0KQFn6M',   // Publishable key (공개돼도 괜찮은 키)

  // Cloudinary (사진 저장)
  CLOUDINARY_CLOUD_NAME: 'yqh2fqhr',     // 대시보드 맨 위의 Cloud name
  CLOUDINARY_UPLOAD_PRESET: 'archive_upload',  // 직접 만든 Unsigned 업로드 프리셋 이름

  // 휴대폰 알림용 공개 키예요. 그대로 두세요.
  VAPID_PUBLIC_KEY: 'BJNm8t-7cQgSvbhdhySKsSQHPi3nRHxjU_TsnMILr67SJLg9nZREa2I-t9I-L_N15FFc4mMr01sRCXFQ_tfp5Bs'
};
