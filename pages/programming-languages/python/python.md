# Python

## References

* [Unicode HOWTO](https://docs.python.org/2.7/howto/unicode.html)

## Use

### List: One line expression

```python
my_list = [1, 2, 3]
print([ n for n in my_list if n == 1 ][0]) # 1
```

### Print in one line dynamically

- Print dots in one line (for example, in "for" iterations)

```python
print('.', sep=' ', end='', flush=True)
```
