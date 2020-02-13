import {Component, OnInit} from '@angular/core';
import {Member} from '../../shared/models/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  public activeMembers = [
    new Member('Camilla Maki Shimizu', ['Apostila'], 'assets/imgs/members/camilla1.jpg'),
    new Member('Caroline T. de Campos', ['Marketing'], 'assets/imgs/members/carol1.jpg'),
    new Member('Clara', [], 'assets/imgs/members/clara1.jpg'),
    new Member('Gabriel', [], 'assets/imgs/members/gabrielPissaia1.jpg', 'assets/imgs/members/gabrielPissaia2.jpg'),
    new Member('Guilherme M. da Silva', ['Apostila'], 'assets/imgs/members/guilherme1.jpg'),
    new Member('Iori', [], 'assets/imgs/members/iori1.jpg', 'assets/imgs/members/iori2.jpg'),
    new Member('Lara Gabriely', ['Marketing', 'Instrutora'], 'assets/imgs/members/lara1.jpg'),
    new Member('Leonardo R. Salandim', ['Instrutor', 'Coordenação'], 'assets/imgs/members/leonardo1.jpg', 'assets/imgs/members/leonardo2.jpg'),
    new Member('Lucas O. da Silva', ['Material'], 'assets/imgs/members/lucas.jpg'),
    new Member('Maria Eugênia', ['Professora Coordenadora'], 'assets/imgs/members/mariaEugenia1.jpg', 'assets/imgs/members/mariaEugenia2.jpg'),
    new Member('Mariana', [], 'assets/imgs/members/mariana1.jpg', 'assets/imgs/members/mariana2.jpg'),
    new Member('Mario', [], 'assets/imgs/members/mario1.jpg', 'assets/imgs/members/mario2.jpg'),
    new Member('Monique', [], 'assets/imgs/members/monique1.jpg'),
    new Member('Nathan Guerreiro', ['Material Digital', 'Coordenador '], 'assets/imgs/members/nathan1.jpg', 'assets/imgs/members/nathan2.jpg'),
  ];

  public inactiveMembers = [
    new Member('Felipe Seolin Bento', ['Marketing'], 'assets/imgs/members/felipeSeolin1.jpg', '', true),
  ];

  constructor() {
  }

  ngOnInit() {
    const sortFunction = (n1, n2) => {
      if (n1.name > n2.name) {
        return 1;
      }
      if (n1.name < n2.name) {
        return -1;
      }
      return 0;
    };

    this.activeMembers = this.activeMembers.sort(sortFunction);
    this.inactiveMembers = this.inactiveMembers.sort(sortFunction);
  }

}
