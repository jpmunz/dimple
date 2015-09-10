        // Copyright: 2015 AlignAlytics
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
        // Source: /src/objects/chart/methods/_parentHeight.js
        this._parentHeight = function () {
          if (this._domCache.height) {
            return this._domCache.height;
          } else {
            return dimple._parentHeight(this.svg.node());
          }
        };
