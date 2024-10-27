# numerical-method

## Linear spline

```bash
  f(x) = f(xi) + m(x-xi) if x=0 || xi <= x <= xi+1
```

### Find m

```bash
  mi = f(xi) - f(xi-1)
      ----------------- if i=1
          xi - xi-1
```
