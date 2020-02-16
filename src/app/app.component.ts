import { Component } from "@angular/core";

function menuToggle() {
  const toggleBtn = document.getElementsByClassName("togglebutton")[0];
  const nav = document.getElementsByClassName("sidebar-page-list")[0];
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "portfolio";

  ngOnInit() {
    menuToggle();
  }
}
