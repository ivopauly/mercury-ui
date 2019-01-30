import {
    Injectable,
    Component,
    Injector,
    ComponentRef,
    Inject
} from '@angular/core'

import { ComponentPortal, PortalInjector } from '@angular/cdk/portal'
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay'

import { ToastRef } from './toast-ref'

import { TOAST_DATA } from './toast-data'

export interface ToastData {
    title: string
    message: string
}

interface ToastConfig {
    duration: number,
    data: ToastData
}

const DEFAULT_CONFIG: ToastConfig = {
    duration: 5000,
    data: {
        title: 'Hello',
        message: 'World'
    }
}

@Injectable()
export class HgToast {

    private _openToasts: ToastRef[] = new Array()
    private _overlay: Overlay
    private _injector: Injector
    constructor(
        overlay: Overlay,
        injector: Injector
    ) {
        this._overlay = overlay
        this._injector = injector
    }

    simple(text: string, config?: ToastConfig): ToastRef {
        const toastConfig = {
            ...DEFAULT_CONFIG,
            ...config
        }

        toastConfig.data.title = text

        const toastRef: ToastRef = this._open(toastConfig)

        return toastRef
    }

    private _geOverlayConfig(config: ToastConfig): OverlayConfig {
        const positionStrategy = this._overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically()

        const overlayConfig = new OverlayConfig({
            hasBackdrop: false,
            scrollStrategy: this._overlay.scrollStrategies.block(),
            positionStrategy
        })

        return overlayConfig
    }

    private _createOverlay(config: ToastConfig): OverlayRef {
        const overlayConfig = this._geOverlayConfig(config)

        return this._overlay.create(overlayConfig)
    }

    private _open(config: ToastConfig): ToastRef {
        const overlayRef = this._createOverlay(config)
        const toastRef = new ToastRef(overlayRef)

        const overlayComponent = this._attachToastContainer(overlayRef, config, toastRef)
        
        setTimeout(() => {
            toastRef.close()
        }, config.duration)

        return toastRef
    }

    private _createInjector(config: ToastConfig, toastRef: ToastRef): PortalInjector {
        const injectionTokens = new WeakMap()

        injectionTokens.set(ToastRef, toastRef)
        injectionTokens.set(TOAST_DATA, config.data)

        return new PortalInjector(this._injector, injectionTokens)
    }

    private _attachToastContainer(overlayRef: OverlayRef, config: ToastConfig, toastRef: ToastRef): HgToastComponent {
        const injector = this._createInjector(config, toastRef)

        const containerPortal = new ComponentPortal(HgToastComponent, null, injector)
        const containerRef: ComponentRef<HgToastComponent> = overlayRef.attach(containerPortal)

        return containerRef.instance
    }
}

@Component({
    selector: 'hg-toast',
    styles: [`
        :host {
            display: inline-block;
            background: #0002F2;
            padding: 16px 32px;
            margin: 16px;
        }
        h1 {
            margin: 0;
            padding: 0;
            font-size: 1.2em;
        }
        p {
            margin: 0;
        }
    `],
    template: `
        <div>
            <h1>{{ _title }}</h1>
            <p>
                {{ _message }}
            </p>
        </div>
    `
})
export class HgToastComponent {

    _title: string
    _message: string

    constructor(
        toastRef: ToastRef,
        @Inject(TOAST_DATA) data: ToastData
    ) {
        this._title = data.title
        this._message = data.message
        console.log(data)
    }
}

