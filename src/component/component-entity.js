export class ComponentEntity {
	constructor(entity) {
		this.email = entity.email
		this.name = entity.name
		this.active = entity.active
		this.packageName = entity.packageName
		this.version = entity.version
		this.tarballSize = entity.tarballSize
		this.jsFileCount = entity.jsFileCount
		this.jsTotalBytes = entity.jsTotalBytes
		this.jsAverageBytes = entity.jsAverageBytes
		this.jsSmallestFileBytes = entity.jsSmallestFileBytes
		this.jsLargestFileBytes = entity.jsLargestFileBytes
		this.cssFileCount = entity.cssFileCount
		this.cssTotalBytes = entity.cssTotalBytes
		this.cssAverageBytes = entity.cssAverageBytes
		this.cssSmallestFileBytes = entity.cssSmallestFileBytes
		this.cssLargestFileBytes = entity.cssLargestFileBytes
		this.mjsFileCount = entity.mjsFileCount
		this.mjsTotalBytes = entity.mjsTotalBytes
		this.mjsAverageBytes = entity.mjsAverageBytes
		this.mjsSmallestFileBytes = entity.mjsSmallestFileBytes
		this.mjsLargestFileBytes = entity.mjsLargestFileBytes
	}
}
