/* @jsx h */
import { h, Component, State, Prop, Host } from "@stencil/core";

@Component({
  tag: "av-uploader",
  styleUrl: "index.css",
  shadow: true,
})
export class ApivideoUploader {
  @State() counter: number = 0;
  @State() chunkProgress: number;
  @State() totalProgress: number;
  @State() status: string = 'WAIT';
  
  @Prop() token: string = 'to1R5LOYV0091XN3GQva27OS';
  @Prop() chunkSize: number = 10;

  url: string;
  player: string;
  file: any;
  filename: string;
  size: number;
  chunks: number;
  limit: number;

  connectedCallback() {
    this.url = `https://sandbox.api.video/upload?token=${this.token}`;
    this.limit = this.chunkSize * 1000000; // chunkSize in MB
  }

  createChunk(start:number, id?:string) {
    this.status = 'PROGRESS';
    this.counter++;
		const end = Math.min(start + this.limit , this.size );
		
    const chunk = this.file.slice(start, end);
  	const form = new FormData();
		
    if (id){
			form.append('videoId', id);	
		}
  	
    form.append('file', chunk, this.filename);

		this.uploadChunk(form, start, end);
  }

  uploadChunk(form:any, start:number, end:number) {
    let req = new XMLHttpRequest();
    const contentRange = `bytes ${start}-${end - 1}/${this.size}`;
		
    req.upload.addEventListener('progress', (event) => this.handleProgress(event));	
    req.open('POST', this.url, true);
		req.setRequestHeader('Content-Range',contentRange);
    req.onload = (event) => {
      var res = JSON.parse(req.response);

      start += this.limit;	
      
      if (start < this.size) {
        this.createChunk(start, res.videoId);
      }
      else {
        this.status = 'DONE';
        this.player = res.assets.player;
      }
    };
    req.send(form);
  }

  handleChange(event:any) {
    this.file = event.target.files[0];
    this.filename = this.file.name;
    this.size = this.file.size;
    
    this.chunks = Math.ceil(this.size / this.limit);
    this.createChunk(0);
  }

  handleProgress(event:any) {
    if (!event.lengthComputable) { return }

    this.chunkProgress = Math.round(event.loaded / event.total * 100);
		this.totalProgress = Math.round((this.counter -1) / this.chunks * 100 + this.chunkProgress / this.chunks);
  }

  render() {
    return (
      <Host>
        <input type="file" onChange={(event) => this.handleChange(event)} />
        {this.status != 'WAIT' &&
          <p>
            {this.filename &&
              <span>File <em>{this.filename}</em> - </span>
            }

            {this.status == 'PROGRESS' && this.chunks &&
              <span>uploading {this.chunks} chunks</span>
            }
            {this.status == 'DONE' &&
              <span>uploaded!</span>
            }

            <br/>

            {this.status == 'PROGRESS' && this.chunkProgress &&
              <span>Chunk #{this.counter}: {this.chunkProgress}% uploaded</span>
            }
            <br/>
            {this.status == 'PROGRESS' && this.totalProgress && 
              <span>Total: {this.totalProgress}% uploaded</span>
            }

            {this.status == 'DONE' &&
              <a href={this.player} target="_blank">Play it online!</a>
            }
          </p>
        }
      </Host>
    );
  }
}
