import { async, TestBed } from '@angular/core/testing'
import { Component } from '@angular/core'
import { By } from '@angular/platform-browser'

import { HgButtonModule } from './button.module'

import { ThemeColor } from '../core/color-element'

describe('Mercury Button', () => {

    beforeEach( async( () => {
        TestBed.configureTestingModule({
            imports: [HgButtonModule],
            declarations: [TestApp]
        })

        TestBed.compileComponents()
    }))

    it('Should init', () => {
        const fixture = TestBed.createComponent(TestApp)

        const testComponent = fixture.debugElement.componentInstance
        const buttonElement = fixture.debugElement.query(By.css('button'))

        expect(testComponent).toBeDefined()
        expect(buttonElement).toBeDefined()
    })

    it('Should have assigned colors', () => {
        const fixture = TestBed.createComponent(TestApp)

        const testComponent = fixture.debugElement.componentInstance
        const buttonElement = fixture.debugElement.query(By.css('button'))

        testComponent.buttonColor = 'primary'
        fixture.detectChanges()
        expect(buttonElement.nativeElement.classList.contains('hg-primary')).toBeTruthy()
        
        testComponent.buttonColor = 'secondary'
        fixture.detectChanges()
        expect(buttonElement.nativeElement.classList.contains('hg-secondary')).toBeTruthy()

        testComponent.buttonColor = 'accent'
        fixture.detectChanges()
        expect(buttonElement.nativeElement.classList.contains('hg-accent')).toBeTruthy()

        testComponent.buttonColor = null
        fixture.detectChanges()
        expect(buttonElement.nativeElement.classList).not.toContain('hg-primary')
        expect(buttonElement.nativeElement.classList).not.toContain('hg-secondary')
        expect(buttonElement.nativeElement.classList).not.toContain('hg-accent')
    })

    describe('Button[hg-button]', () => {
        it('Should handle click', () => {
            const fixture = TestBed.createComponent(TestApp)
            const testComponent = fixture.debugElement.componentInstance
            const buttonElement = fixture.debugElement.query(By.css('button'))

            expect(testComponent.clickCount).toBe(0)
            buttonElement.nativeElement.click()
            expect(testComponent.clickCount).toBe(1)
        })
    })
})

@Component({
    selector: 'test-app',
    template: `
        <button hg-button type="button" (click)="onClick()" [color]="buttonColor">
            Go
        </button>
    `
})
class TestApp {
    clickCount: number = 0
    buttonColor: ThemeColor

    onClick() {
      this.clickCount++
    }
}
