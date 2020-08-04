import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  mediaStream: MediaStream;
  avatarUrl;
  constructor() { }

  ngOnInit(): void {
    // this.getUserMedia();
  }

  getUserMedia() {
    // 选择最接近360x540的分辨率
    const constraints = { video: { width: 720, height: 560 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        const video: any = document.getElementById('video');
        video.srcObject = this.mediaStream;
        // tslint:disable-next-line:only-arrow-functions
        video.onloadedmetadata = (e) => {
          video.play();
        };
      }).catch((err) => {
        console.log(err.name + ': ' + err.message);
      }); // 最后一定要检查错误。
    }
    /** 照相 */
  takepicture() {
    const canvas = document.querySelector('canvas');
    const video = document.querySelector('video');
    const context = canvas.getContext('2d');
    canvas.width = 360;
    canvas.height = 540;
    /**
     * 在画布上定位图像，并规定图像的宽度和高度
     * 参数1:图像来源
     * 参数2: 在画布上放置图像的 x 坐标位置。
     * 参数3: 在画布上放置图像的 y 坐标位置。
     * 参数4: 图像的宽
     * 参数5: 图像的高
     */
    context.drawImage(video, 0, 0, 360, 540);
    // data就是拍出照片的base64
    const data = canvas.toDataURL('image/png');
    this.avatarUrl = data;
  }

}
