def sqrt(s): #calculating square root using babylonian algorythm
    x = s/2
    for _ in range(30):
        x = (x + s/x)/2
    return x

def nthrt(n, s): # calculating nth root using babylonian algorythm
    x = s/2
    for _ in range(30):
        x = (x * (n-1) + (s/x**(n-1)))/n
    return x

def factorial(n): #calculating the factorial of n
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact
        
def sum(start_tuple, end, expr):
    start, var_name = start_tuple
    # Convert start to integer
    start = int(start)
    total = 0
    for n in range(start, end + 1):
        # evaluate the expression removing the variable
        local_dict = {var_name: n}
        total += eval(expr, {}, local_dict)
    return total

def product(start_tuple, end, expr):
    start, var_name = start_tuple
    start = int(start)
    product = 1
    for n in range(start, end + 1):
        local_dict = {var_name: n}
        product *= eval(expr, {}, local_dict)
    return product


def ln(a, iterations = 30): #natural logarythm
    x = a - 1
    for _ in range(iterations):
        x = x - (exp(x) - a) / exp(x)
    return x

def exp(x, terms=30): #exponential with Taylor series
    s = 1
    num = 1
    den = 1
    for n in range(1, terms):
        num *= x
        den *= n
        s += num / den
    return s

def sin(x, terms=15):
    s = 0
    num = x
    den = 1
    sign = 1
    for n in range(1, 2*terms, 2):
        s += sign * num / den
        num *= x * x
        den *= (n + 1) * (n + 2)
        sign = -sign
    return s

def cos(x, terms=15):
    s = 1
    num = 1
    den = 1
    sign = -1
    for n in range(2, 2*terms, 2):
        num *= x * x
        den *= (n - 1) * n
        s += sign * num / den
        sign = -sign
    return s

def tan(x):
    return sin(x) / cos(x)

def gcd(a, b): #PGCD
    while b:
        a, b = b, a % b
    return a

def lcm(a, b): #PPCM
    return a * b // gcd(a, b)
