export const screens=[
 ['home','Güne bakış','Çalışan','home',''],
 ['login','Giriş','Çalışan','lock','login'],
 ['menu','Günün menüsü','Çalışan','bowl','menu/cafeteria'],
 ['menu-weekly','Haftalık menü','Çalışan','calendar','menu/[slug]'],
 ['menu-classic','Klasik sefer tası','Çalışan','tiffin','menu/corolla-club'],
 ['menu-light','Dengeli sefer tası','Çalışan','leaf','menu/japanese'],
 ['reserve','Sefer tası ayır','Çalışan','plus','reservations'],
 ['reserve-courier','Kurye ile teslimat','Çalışan','truck','reservation/[slug]'],
 ['reserve-shift','Vardiya teslimatı','Çalışan','clock','reservation/corolla-club'],
 ['reserve-special','Özel öğün teslimatı','Çalışan','leaf','reservation/japanese'],
 ['my-reservations','Rezervasyonlarım','Çalışan','calendar','my-reservations'],
 ['selection','Öğün seçimi','Çalışan','bowl','special-meal-selection'],
 ['my-selections','Seçimlerim','Çalışan','check','my-selections'],
 ['snack','Ara öğün talebi','Çalışan','coffee','snack-request'],
 ['packages','Sefer tası seçenekleri','Çalışan','tiffin','package-order'],
 ['package-detail','Sefer tası detayı','Çalışan','tiffin','package-order/[slug]'],
 ['orders','Siparişlerim','Çalışan','bag','orders'],
 ['survey','Deneyimini değerlendir','Çalışan','star','meal-survey'],
 ['profile','Profilim','Çalışan','user','profile'],
 ['tracking','Teslimat takibi','Çalışan','pin',null],
 ['tiffin','Sefer tasım & iade','Çalışan','recycle',null],
 ['admin','Operasyona bakış','Operasyon','grid','panel'],
 ['admin-reservations','Rezervasyon yönetimi','Operasyon','calendar','panel/reservations'],
 ['admin-couriers','Kurye yönetimi','Operasyon','truck','panel/restaurants'],
 ['admin-menu','Menü yönetimi','Operasyon','bowl','panel/menu'],
 ['admin-users','Çalışanlar','Operasyon','users','panel/users'],
 ['admin-roles','Roller & yetkiler','Operasyon','shield','panel/roles'],
 ['admin-packages','Sefer tası paketleri','Operasyon','tiffin','panel/packages'],
 ['admin-reports','Raporlar','Operasyon','chart','panel/reports'],
 ['admin-settings','Sistem ayarları','Operasyon','settings','panel/settings'],
 ['admin-profile','Yönetici profili','Operasyon','user','panel/profile'],
 ['admin-snacks','Ara öğün talepleri','Operasyon','coffee','panel/snack-requests'],
 ['admin-special','Özel öğün planı','Operasyon','leaf','panel/cafeteria/iss-menu'],
 ['admin-selections','Öğün seçim sonuçları','Operasyon','check','panel/cafeteria/selections'],
 ['admin-shifts','Vardiyalar','Operasyon','clock','panel/cafeteria/shifts'],
 ['admin-points','Teslimat noktaları','Operasyon','pin','panel/cafeteria/cafeterias'],
 ['admin-approval','Menü onayları','Operasyon','shield','panel/cafeteria/menu-approval'],
 ['admin-groups','Öğün grupları','Operasyon','grid','panel/cafeteria/meal-groups'],
 ['admin-survey','Memnuniyet sonuçları','Operasyon','star','panel/cafeteria/survey-results'],
 ['courier','Kurye çalışma alanı','Kurye','truck',null],
 ['courier-route','Günlük rotam','Kurye','pin',null],
 ['courier-delivery','Teslimat & iade','Kurye','check',null],
 ['gallery','Tüm ekranlar','Sunum','grid',null]
].map(([id,title,role,icon,source])=>({id,title,role,icon,source}));
export const employeeNav=[['GÜNÜN AKIŞI',['home','menu','reserve','orders','tracking']],['SANA ÖZEL',['my-reservations','selection','tiffin','survey']]];
export const adminNav=[['OPERASYON',['admin','admin-reservations','admin-couriers','admin-points']],['YEMEK & PLANLAMA',['admin-menu','admin-special','admin-approval','admin-packages','admin-selections','admin-snacks','admin-shifts','admin-groups']],['YÖNETİM',['admin-users','admin-roles','admin-reports','admin-survey','admin-settings']]];
export const courierNav=[['BUGÜNKÜ İŞLERİM',['courier','courier-route','courier-delivery']],['HESABIM',['tiffin','profile']]];
export const meals=[
 {id:'classic',name:'Klasik sefer tası',category:'Klasik',kcal:785,tag:'Günün favorisi',desc:'Izgara köfte, şehriyeli pirinç pilavı, mercimek çorbası ve cacık.',img:'food.png',allergens:'Gluten · Süt',price:'1 öğün hakkı'},
 {id:'balanced',name:'Dengeli sefer tası',category:'Dengeli',kcal:520,tag:'Dengeli seçim',desc:'Izgara tavuk, karabuğday, mevsim yeşillikleri ve yoğurt.',img:'balanced.png',allergens:'Süt',price:'1 öğün hakkı'},
 {id:'plant',name:'Bitkisel sefer tası',category:'Bitkisel',kcal:465,tag:'Bitkisel',desc:'Nohutlu sebze yemeği, bulgur pilavı ve taze mevsim salatası.',img:'plant.png',allergens:'Gluten',price:'1 öğün hakkı'}
];
export const deliveries=[
 ['SF-2048','Deniz Yılmaz','Merkez Ofis · A Blok','Klasik sefer tası','12:00 – 12:30','Yolda'],
 ['SF-2049','Elif Kaya','Soğuk Haddehane','Dengeli sefer tası','12:00 – 12:30','Hazırlanıyor'],
 ['SF-2050','Mert Demir','Bakım Atölyesi','Bitkisel sefer tası','12:30 – 13:00','Planlandı'],
 ['SF-2051','Selin Aksoy','Merkez Ofis · B Blok','Klasik sefer tası','12:00 – 12:30','Teslim edildi'],
 ['SF-2052','Can Arslan','Lojistik Merkezi','Klasik sefer tası','12:30 – 13:00','Yolda'],
 ['SF-2053','Derya Aydın','Sıcak Haddehane','Dengeli sefer tası','13:00 – 13:30','Planlandı']
];
