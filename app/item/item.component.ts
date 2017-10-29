import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

@Component({
    moduleId: module.id,
    selector: 'item-comp',
    templateUrl: './item.component.html'
})

export default class ItemComponent implements OnDestroy{
    private modelPhone: number;
    private price: number;
    private category: string;
    private RouteSubscription: Subscription;
    private QuerySubscription: Subscription;

    constructor(private activeRoute: ActivatedRoute, private router: Router){
        this.RouteSubscription = activeRoute.params.subscribe(params => this.modelPhone = params['model']);
        this.QuerySubscription = activeRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.price = queryParam['price'];
                this.category = queryParam['category']
            }
        );
        

    }

    goMainPage = () => this.router.navigate(['/about']);
    ngOnDestroy(){
        this.RouteSubscription.unsubscribe();
        this.QuerySubscription.unsubscribe();
    }
}