class backpack {
    constructor (
        id,
        name, 
        volume, 
        color, 
        numPocket, 
        strapLengthL, 
        strapLengthR, 
        lidOpen, 
        dateAcquired, 
        image
    ) {
        this.id = id;
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.numPocket = numPocket;
        this.strapLength = {
            left: strapLengthL, 
            right: strapLengthR,
        };
        this.lidOpen = false;
        this.dateAcquired = dateAcquired;
        this.image = image;
    }
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(left, right) {
        this.straphLength.left = left;
        this.strapLength.right = right;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
      }
}

export default backpack;