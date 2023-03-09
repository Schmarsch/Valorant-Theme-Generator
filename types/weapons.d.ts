type Weapon = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  category: string;
  defaultSkinUuid: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: WeaponStats;
  shopData: WeaponShopData;
  skins: WeaponSkin[];
};

type WeaponStats = {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: number;
  feature: string;
  fireMode: string;
  altFireType: string;
  adsStats: WeaponAdsStats;
  altShotgunStats: WeaponsShotgunStats;
  airBurstStats: WeaponsBurstStats | null | undefined;
  damageRanges: WeaponDamageRange[];
};

type WeaponsShotgunStats = {
  shotgunPelletCount: number;
  burstRate: number;
};

type WeaponsBurstStats = {
  shotgunPelletCount: number;
  burstDistance: number;
};

type WeaponShopData = {
  cost: number;
  category: string;
  categoryText: string;
  gridPosition: WeaponShopDataGridPosition;
  image: string;
  newImage: string;
  newImage2: string;
  assetPath: string;
};

type WeaponDamageRange = {
  rangeStartsMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

type WeaponAdsStats = {
  zoomMultiplier: number;
  fireRate: number;
  runSpeedMultiplier: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

type WeaponShopDataGridPosition = {
  row: number;
  column: number;
};

type WeaponSkin = {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  assetPath: string;
  chromas: WeaponSkinChroma[];
  levels: WeaponSkinLevel[];
};

type WeaponSkinChroma = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullRender: string;
  swatch: any;
  assetPath: string;
};

type WeaponSkinLevel = {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  assetPath: string;
};