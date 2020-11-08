import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal.model';
import { Pagination, Photo } from './../animal.model';


export class PetInfo {
  public breed: string;
  public age: string;
  public size: string;
  public gender: string;
}

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.css']
})
export class PetSearchComponent implements OnInit {

  animals: Animal[];
  page: Pagination;
  image: Photo = {
    small: 'assets/images/notfound.png',
    medium: null,
    large: null,
    full: null
  };

  constructor(private router: Router, private petService: PetService) { }

  model = new PetInfo();

  // Dogs = [{name: 'Pet1', breed: 'Poodle', age: '8 months', gender: 'Male', location: 'San Diego, CA'},
  // {name: 'Pet2', breed: 'Husky', age: '6 months', gender: 'Male', location: 'San Francisco, CA'},
  // {name: 'Pet3', breed: 'Cocker Spaniel', age: '5 months', gender: 'Male', location: 'Merced, CA'},
  // {name: 'Pet4', breed: 'Terrier', age: '6 months', gender: 'Female', location: 'Stockton, CA'},
  // {name: 'Pet5', breed: 'Pitbull', age: '11 months', gender: 'Female', location: 'Fresno, CA'}];

  Breeds: string[] = [
    'Golden Retriever',
    'Husky',
    'Labrador',
    'Pomeranian',
    'Poodle'
  ];

  href  = '';

  getPetsFromAPI(): void {
    this.petService.getAnimalByType().subscribe( data => {
        this.animals = data.animals;
        console.log(this.animals);
        this.page = data.pagination;
        this.animals.forEach(element => {
          this.setAnimal(element);
        });
    });
  }

  setAnimal(element: any): void{
    if (element.photos.length === 0 || element.photos === undefined) {
      element.photos.push(this.image);
    }

    if (element.name.includes('-')){
      const n = element.name;
      element.name = n.split('-')[0];
    }

    if (element.name.includes(' is')){
      const n = element.name;
      element.name = n.split(' is')[0];
    }

    if (element.name.includes('~')){
      const n = element.name;
      element.name = n.split('~')[0];
    }


    element.view = 'View';
  }



  ngOnInit(): void {
    this.model.breed = 'any';
    this.model.age = 'any';
    this.model.gender = 'any';
    this.model.size = 'any';
    this.href = this.router.url;
    this.getPetsFromAPI();
    console.log(this.href);
  }

  onSubmit(petForm): void {
    console.log(petForm);
  }
}
