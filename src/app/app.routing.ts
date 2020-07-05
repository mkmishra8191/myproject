import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./components/user.component";
import { TodoComponent } from "./components/todo.component";


const appRoutes: Routes = [
        {
            path: '',
            component: UserComponent
        },
        {
            path: 'todo',
            component: TodoComponent
        }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);