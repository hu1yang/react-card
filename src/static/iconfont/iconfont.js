import { createGlobalStyle } from 'styled-components';
export const GlobalfontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1572107360150'); /* IE9 */
  src: url('iconfont.eot?t=1572107360150#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAfYAAsAAAAADfgAAAeMAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqOQIs6ATYCJAMcCxAABCAFhG0HcBuaC6OiflFOPLK/OODJUOOGQBhWq2q1NvMwnqeqaf3/tycQWn1oBESiamCNE+lIpwiitbJ6FvCBOJIkS1RhHRWHIIGki9ERhhXbu3fuzQBQRQ5LcsjqA7k0vaQppS+9ITk9ZTYhN+GW5gP/Q3rhY9OWuJC3TlwPtWcoWZP18DDHEskP4WnXFH61A5B1MjKbmZ7ywWHT3wNk3o/KHiTFn2vYR0VxggGNtWgujAsAs2fvxmEVsMy3ar+mJxNoLVvRdubookJ65YQh0HFLSUZ6A055BjPUljJhxzzio0KdXqVvxAfr7+MnL3pJiozY8OLNw4DsfAnHehkYbhgIqvr8OC9GhkOI/Gx+lmh7AMZ4sju0i3c6i+jVkhyrNUbMOv4EMDNaEQ69LA4jjSqfKZS3f17pYOyBvVIq+RLaBIkvjUHUNAK7HKYZ2GUwzcKugOkYlF9LkMroH8Yakk5y12+Ccpg+k5xkTKeuBaJfa7VdGPaGlveHpxt2lPF2fmawb23ifrDVGKw26tUWdy7EGpy1BAPgCgpfuRQGl+64LlqtsOPA//+vKz2w5f7bcd1HREKMi5AKAnkd24ZQzFIAKCRECCIiDdoyhkZfWUOYg0uorgvfwfDWa0irW+HQ2QFIRIXJ76cQswQw+bkex2PsOrXVcVyuy7htv7AkxuTNnFPqoeSZtY1SKIxmLT2aE0i0WsS1y/ZWSMv1uIRiaZnb1BBIRITRxpbCFcJMGd/jgGDLtwmPx2oSKs00xEpW4aMnlR8Kx+f2VIW0KMLiNJnYQZ5agYdD5x0ZTqXn2zEvy/tb618TmWwBhUokOtxiUlHIg96petKnEMAkk8s5Zbrx8Kv+AKkUhAeE68tzZAe0I/rY+WaeEvEg5dIhdoDKFzgTzpKX1OYms4hxndXMul2NVDb5lDHO59Z1kvHydwLWqJbS/Ol/x4M29bQb5HJhofiiy61B/72Qxbx+kweDOP7tw1L1dPa0mVQuRia3wzaXr8R31bYF0hNeViuN/dLCg4/upvzqzAdnY+Y/Gvw2/tj/zL9XLSYxrYVcpGzmShBsZ2mPARr/wf89EYGQV+vvOw0deWBH9Pnh226LmGvXNOYvaQWw/Fla/9eY3H+UiQdyyK2S9OTeEs2naSk6z7Sfu/FDwf/RjMLauj8rgLRpIAe265nQ4BCUAWUODmaazKFBqHdoKEMmDmpthXRd3EkOJ9TiyfiFtA/JG754Efqu5PnzsNB9gkDz15Mg4w+aLy/Ny/TzjT9qnjlxv2/rwDf8n5EQKfCpr6wJJNJbaPiILOFnnL+6yyB+Rv4ik8TJk0Dn9YPyB0CH+G0ev4Mxg5ir/GMcVuc7WtBeQZErlv/yl8g3oS/bSP4/q43Lgr1oR8t5Dquxq/yYwRzfgy52XJfZMcA+DN+Jb5n3IExKi1ezSa36H+U9eih4Pa7iVXvU4AWmFh89D9mlpOMP8PzRwJaA8Bnl4++MqGlUpfYK2LexGq9urHGpfRpNydTYiFpKMzIvqhwcTkilKaE5s4mfzvIZcjR4bcTMCs/GyHqKDTRpMtkCK2mKZSNe696xF9MOnGj7bmaf0ttnkNc+HK8CV7Q31e2beWebmPg9L8Z6Y0QbhzVFPzbIhmf4oMTZHLSp7t0xFTFpwjXcBkNN0dOig8MaYrfU0gr7pAnu9vPlzYjasNjAkDRzJKfu1SVEvlkCdje1kITdzEScPRLcYWRQP4AsYog4sh0TPcY8LoKoGGQpemt3YqgkrJbCeMt8x3jHpOnuAi7coyRwmPydcZqBMjaXdeiAW9oOk0OIMwdioMBEV4It9u43HD8vuitBRskn+Cas431KFH6KUt+BnqPH5j/643gecmDPLbUpbXrGKHvAwVNsMiZqvAtSXcR2goyRDBPK2yJvkurpYkcroyKn3PvA/yzTyoqTk4nl5VlbkUh16o/inO1d5Gs5S/STT0d0/9raZy9tIW6sESZmAs7rycW4ucfC2TGwuzsco2craqxsWy5jCdve/1n9BAWNl+K/vbeOB2eoqoGiBpKm0lYs257aDqqU5W/jFN/aCnIADJo7ATYGyB6gz8DgfjbC8v//c6KTibVJYnIsrrzdoYo12PtXAk9WyR/8RrS/kqi/CJnPt5r9LXk5JA1GtiVkFzYhq/Z1e96fgfivfWmEvnpPp8lJGk9J5Fdx3Fg+oZWz2Mej4/7qM0+RVX8n5ikPksoSZGqbyBx7CAqdw1CqHYfWgePdOxOMDpE32PfJIIz6gmTYJ8iM+pFBBuwvFKb9Q2k0OqB1KSYO2NkO1b9vgCEE1L+liutMKA/2250lkJcJM36NxamBKVSGupYTrhxDBqaOTYor6SEKKoxO6RE7HSSJprnREXC0QsR8zbZF0qYW1ynpd5oBGDQkA5TvVlrhtIyYG/VHfr8ESJcSjMkY+ZSuAUZBzZ9yWRwC8tiYkUb2pb9wRfIg9wtUyxta6piPDn6QyKJG5cnLRQCHLGGJfG6NzWcSVKPVvjndzkabb0qxQRUpssijiDKqwNHy28hM/zUoXzGNarX3RmVSsw9G+oacqSJUMQzzkGXyVkOxWP7VniBZTncQAg==') format('woff2'),
  url('iconfont.woff?t=1572107360150') format('woff'),
  url('iconfont.ttf?t=1572107360150') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1572107360150#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-star:before {
  content: "\e609";
}

.icon-weibiaoti-:before {
  content: "\e601";
}

.icon-xingxing:before {
  content: "\e617";
}

.icon-jingcaishike:before {
  content: "\e60f";
}

.icon-changyongicon-:before {
  content: "\e618";
}

.icon-dingwei:before {
  content: "\e637";
}

`
