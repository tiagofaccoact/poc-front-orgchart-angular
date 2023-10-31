import { Component, OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tree = document.getElementById('tree') as HTMLDivElement | null;

    if (tree) {
      OrgChart.SEARCH_PLACEHOLDER = "Buscar pessoa ou cargo"
      var chart = new OrgChart(tree, {
        mouseScrool: OrgChart.none,
        enableSearch: true,
        template: "olivia",
        enableDragDrop: true,
        nodeBinding: {
          imgs: "img",
          field_0: "name",
          field_1: "title",
          img_0: "img",
        },
        nodeMenu: {
          details: { text: "Details" },
          edit: { text: "Edit" },
          add: { text: "Add" },
          remove: { text: "Remove" }
        },
      });

      chart.load([
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ]);
    }
  }
}
