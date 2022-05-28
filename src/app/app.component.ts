
import { Component, OnInit } from '@angular/core';
import { ImagesService } from './services/images.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
	color1 = '123456';
	color2 = 'ffffff';
	distance = 'euclidean';
	distanceAlgos = [
		'Euclidean',
		'Manhattan',
		'Chebyshev'
	]
	sites = 100;
	lines = true;
	voronoi = 'voronoi'

	splits = 3;
	fractal = 'fractal'

	imgWarning = ''

	constructor(private imageService: ImagesService) {}

	ngOnInit() {
		document.getElementById('video').style.display = 'none'
		this.hideControls();
		this.getVoronoiImage('voronoi')
		document.getElementById('input-controls').style.display = 'inline-block'
	}

	changeImageControls() {
		this.hideControls();
		let ctrl = (<HTMLSelectElement>document.getElementById('image-type')).value
		if (ctrl == 'voronoi' || ctrl == 'moving') {
			document.getElementById('voronoi-controls').style.display = 'inline-block'
			this.getVoronoiImage()
		}
		else if (ctrl == 'fractal' || ctrl == 'htree' || ctrl == 'tsquare') {
			document.getElementById('fractal-controls').style.display = 'inline-block'
			this.getFractalImage()
		}
		else if (ctrl == 'stainedglass2' || ctrl == 'quadimage' || ctrl == 'circles') {
			document.getElementById('input-controls').style.display = 'inline-block'
			this.getStainglassImage()
		}
	}

	getVoronoiImage(type?: string) {
		this.distance = (<HTMLSelectElement>document.getElementById('distance-algo')).value
		this.sites = Number((<HTMLInputElement>document.getElementById('regions')).value)
		this.color1 = (<HTMLInputElement>document.getElementById('color1')).value.substring(1)
		this.color2 = (<HTMLInputElement>document.getElementById('color2')).value.substring(1)
		this.lines = (<HTMLInputElement>document.getElementById('lines')).checked
		this.voronoi = type || (<HTMLSelectElement>document.getElementById('image-type')).value || 'voronoi'
		if (this.voronoi == 'moving') {
			document.getElementById('loading').style.display = 'block'
		}
		this.imageService.getVoronoiImage(this.voronoi, this.lines, this.sites, this.distance, this.color1, this.color2).subscribe((res) => {
			var imgUrl = URL.createObjectURL(res);
			this.showMedia(this.voronoi, imgUrl)
			document.getElementById('loading').style.display = 'none'
		});
	}

	getFractalImage() {
		this.splits = Number((<HTMLInputElement>document.getElementById('splits')).value)
		this.fractal = (<HTMLSelectElement>document.getElementById('image-type')).value
		this.imageService.getFractalImage(this.fractal, this.splits).subscribe((res) => {
			var imgUrl = URL.createObjectURL(res);
			this.showMedia(this.fractal, imgUrl)
		})
	}

	getStainglassImage() {
		let file = (<HTMLInputElement>document.getElementById('image-file')).files[0];
		if (file == undefined || file == null) {
			this.imgWarning = 'Must select an image';
			setTimeout(() => {
				this.imgWarning = ''
			}, 2000)
			return
		}
		this.distance = (<HTMLSelectElement>document.getElementById('sg-dist-algo')).value
		this.sites = Number((<HTMLInputElement>document.getElementById('sites')).value)
		this.lines = (<HTMLInputElement>document.getElementById('sg-lines')).checked
		let stainglass = (<HTMLSelectElement>document.getElementById('image-type')).value
		document.getElementById('sg-loading').style.display = 'block'
		this.imageService.getStainglassImage(stainglass, this.lines, this.sites, this.distance, file).subscribe((res) => {
			var imgUrl = URL.createObjectURL(res);
			this.showMedia(stainglass, imgUrl)
			document.getElementById('sg-loading').style.display = 'none'
		})
	}

	showMedia(type: string, imgUrl: string) {
		if (type == 'moving') {
			document.getElementById('image').style.display = 'none'
			document.getElementById('video').style.display = 'block';
			(<HTMLVideoElement>document.getElementById('video')).src = imgUrl;
		} else {
			document.getElementById('video').style.display = 'none'
			document.getElementById('image').style.display = 'block';
			(<HTMLImageElement>document.getElementById('image')).src = imgUrl;
		}
	}

	hideControls() {
		let controls = document.getElementsByClassName('image-control')
		for (let i = 0; i < controls.length; i++) {
			(<HTMLElement>controls[i]).style.display = 'none'
		}
	}
}
