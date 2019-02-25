import { Injectable } from '@angular/core';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {
      id: 1,
      title: 'Mi Titulo',
      slug: 'mi-titulo',
      body: 'conteido de la noticia',
      excerpt: 'contenido'
    },
    {
      id: 2,
      title: 'Mi Titulo',
      slug: 'mi-titulo',
      body: 'conteido de la noticia',
      excerpt: 'contenido'
    },
    {
      id: 3,
      title: 'Mi Titulo',
      slug: 'mi-titulo',
      body: 'conteido de la noticia',
      excerpt: 'contenido'
    }
  ];
  constructor() { }
}
