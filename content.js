var adBlocker = {
  init: function() {
      var self = this;
      self.blockAds();
      self.blockVideoAds();
  },

  blockAds: function() {
      var ads = document.querySelectorAll('div[id^="ad"], div[class^="ad"], div[class*=" ad "], iframe[id^="ad"], iframe[class^="ad"], iframe[class*=" ad "], img[src*="doubleclick.net"], .ytd-display-ad-renderer');

      ads.forEach(function(ad) {
          ad.style.display = "none";
          ad.remove();
      });
  },

  blockVideoAds: function() {
      var videoAds = document.querySelectorAll('video[src*="googlevideo.com"], video[src*="youtube.com"], video[src*="ytimg.com"]');
      videoAds.forEach(function(videoAd) {
          videoAd.pause();
          videoAd.remove();
      });
  }
};

adBlocker.init();
