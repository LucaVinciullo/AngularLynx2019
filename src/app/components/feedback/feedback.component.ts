import { Component, OnInit } from '@angular/core';
import { FeedbackItem } from '../../models/feedback-item'
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})

export class FeedbackComponent implements OnInit {
  model : FeedbackItem = {
    name: 'Mario',
    surname: 'Rossi',
    gender: 'unselected',
    email: 'mario.rossi@gmail.com',
    telephone: '3331336331',
    comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  }

  ngOnInit() {
  }

}
