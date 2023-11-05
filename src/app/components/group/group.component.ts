import { Component, OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor() {
    // OrgChart.templates['olivia']['field_0'] = '<text class="field_0" style="font-size: 20px;" fill="#ffffff" x="125" y="30" text-anchor="middle">{val}</text>';
  }

  ngOnInit(): void {
    const tree = document.getElementById('tree') as HTMLDivElement | null;

    if (tree) {
      OrgChart.SEARCH_PLACEHOLDER = "Buscar pessoa ou cargo"
      var chart = new OrgChart(tree, {
        // mouseScrool: OrgChart.none,
        // nodeMouseClick: OrgChart.action.expandCollapse,
        enableSearch: true,
        template: "olivia",
        enableDragDrop: true,
        nodeBinding: {
          imgs: "img",
          field_0: "name",
          field_1: "title",
          img_0: "img",
        },
        collapse: {
          level: 2
        },
        nodeMenu: {
          details: { text: "Details" },
          edit: { text: "Edit" },
          add: { text: "Add" },
          remove: { text: "Remove" }
        },
        tags: {
          "group": {
            template: "group"
          },
          "hrs-group": {
            subTreeConfig: {
              columns: 1
            }
          },
          "dev-group": {
            subTreeConfig: {
              columns: 1
            }
          }
        }
      });

      chart.on('drop', (sender) => {
        console.log(sender);
      });

      chart.load([
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: "dev", pid: "3", name: "Dev Team", tags: ["dev-group", "group"], description: "Dev Team" },
        { id: 6, stpid: "dev", name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, stpid: "dev", name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 8, pid: 1, name: "Glenn Bell", title: "RH Manager", img: "https://cdn.balkan.app/shared/10.jpg" },
        { id: "hrs", pid: 8, name: "Recursos Humanos", tags: ["hrs-group", "group"], description: "Recursos Humanos" },
        { id: 9, stpid: "hrs", name: "Marcel Brooks", title: "RH", img: "https://cdn.balkan.app/shared/11.jpg" },
        { id: 10, stpid: "hrs", name: "Maxwell Bates", title: "RH", img: "https://cdn.balkan.app/shared/12.jpg" },
        { id: 11, stpid: "hrs", name: "Asher Watts", title: "Junior HR", img: "https://cdn.balkan.app/shared/13.jpg" },
      ]);
    }
  }

}
