/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from '../avatar/nz-avatar.module';
import { NzGridModule } from '../grid/nz-grid.module';
import { NzSpinModule } from '../spin/nz-spin.module';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListItemComponent } from './nz-list-item.component';
import { NzListComponent } from './nz-list.component';
var NzListModule = /** @class */ (function () {
    function NzListModule() {
    }
    NzListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule],
                    declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                    exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
                },] }
    ];
    return NzListModule;
}());
export { NzListModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibGlzdC9uei1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztnQkFFckQsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBUyxDQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBRTtvQkFDNUUsWUFBWSxFQUFJLENBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixDQUFFO29CQUNqRixPQUFPLEVBQVMsQ0FBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUU7aUJBQ3BGOzt1QkFmRDs7U0FnQmEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekF2YXRhck1vZHVsZSB9IGZyb20gJy4uL2F2YXRhci9uei1hdmF0YXIubW9kdWxlJztcbmltcG9ydCB7IE56R3JpZE1vZHVsZSB9IGZyb20gJy4uL2dyaWQvbnotZ3JpZC5tb2R1bGUnO1xuaW1wb3J0IHsgTnpTcGluTW9kdWxlIH0gZnJvbSAnLi4vc3Bpbi9uei1zcGluLm1vZHVsZSc7XG5cbmltcG9ydCB7IE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekxpc3RDb21wb25lbnQgfSBmcm9tICcuL256LWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiAgICAgICAgWyBDb21tb25Nb2R1bGUsIE56U3Bpbk1vZHVsZSwgTnpHcmlkTW9kdWxlLCBOekF2YXRhck1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogICBbIE56TGlzdENvbXBvbmVudCwgTnpMaXN0SXRlbUNvbXBvbmVudCwgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQgXSxcbiAgICBleHBvcnRzOiAgICAgICAgWyBOekxpc3RDb21wb25lbnQsIE56TGlzdEl0ZW1Db21wb25lbnQsIE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0TW9kdWxlIHtcbn1cbiJdfQ==