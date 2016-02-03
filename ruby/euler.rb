# defining a simple test function:
def test(fn, arg, exp , title)
  startTime = Time.new
  r = fn.call(arg)
  endTime = Time.new
  puts ""
  puts " -- #{title} :"
  if r == exp
    puts ">> PASSED! >>"
  else
    puts "<< Failed! <<"
  end
  puts "for input : #{arg}"
  puts "expected : #{exp}"
  puts "result   : #{r}"
  puts "-- Time taken: #{(endTime-startTime)*1000}ms --"
end

# ##########
# problem 1
# ##########

def p1(n)
  sum = 0
  for i in 1..n-1 do
    if i%3 == 0
      sum += i
    elsif i%5 ==0
      sum += i
    end
  end
  return sum
end

# p1 tests

# test(fn = method(:p1), 10, 23, "Prob1 - base test")
# test(fn = method(:p1), 1000, 233168, "Prob1 - test question")

# ##########
# problem 2
# ##########

def p2(max)
  f = 1
  s = 2
  c = f+s
  sum = 2
  begin
    if c%2 == 0
      sum += c
    end
    f = s
    s = c
    c = f + s
  end while c<=max
  return sum
end

# p2 tests

# test(fn = method(:p2), 89, 44, "Prob2 - base test")
# test(fn = method(:p2), 4000000, 4613732, "Prob2 - test question")

# ##########
# problem 3
# ##########

def isItPrime?(n)
  if n <= 1
    return false
  end
  if n <= 3
    return true
  end
  if n%2 == 0 || n%3 == 0
    return false
  end
  x = 5
  while x*x <= n
    if n%x == 0 || n%(x+2) == 0
      return false
    end
    x += 6
  end
  return true
end

def p3(n)
  prime = Math.sqrt(n).floor
  if prime%2 == 0
    prime +=1
  end
  begin
    if isItPrime?(prime)
      if n%prime == 0
        return prime
      end
    end
    prime -=2
  end while prime > 1
  return 0
end

# p3 tests

# test(fn = method(:isItPrime?), 2, true, "prime test")
# test(fn = method(:isItPrime?), 29, true, "prime test")
# test(fn = method(:isItPrime?), 15, false, "prime test")
# test(fn = method(:isItPrime?), 997, true, "prime test")
# test(fn = method(:isItPrime?), 13195, false, "prime test")

# test(fn = method(:p3), 13195, 29, "Prob3 - base test")
# test(fn = method(:p3), 600851475143, 6857, "Prob3 - test question")
def isPali(n)
  nArr = []
  begin
    r = n%10
    n = (n/10).floor
    nArr.push r
  end while n > 0
  i = 0
  l = nArr.length-1
  begin
    if(nArr[i]!=nArr[l-i])
      return false
    end
    i+=1
  end while i <= nArr.length/2
  return true
end

def p4(maxN)
  n1 = maxN
  n2 = maxN
  maxMul = 0
  begin
    n2 = n1
    begin
      n = n1 * n2
      if isPali(n) && n>maxMul
        maxMul = n
      end
      n2 -= 1
    end while n2*maxN > maxMul
    n1 -= 1
  end while n1*maxN > maxMul
  return maxMul
end

# p4 tests

# test(fn = method(:isPali), 919, true, "palindrome test function")
# test(fn = method(:isPali), 93, false, "palindrome test function")
# test(fn = method(:isPali), 9009, true, "palindrome test function")

# test(fn = method(:p4), 99, 9009, "Prob4 - base test")
# test(fn = method(:p4), 999, 906609, "Prob4 - test question")


#p5
def p5(n)
  max = 1
  n.times do |i|
    max *= i+1
  end
  # getting the minimun num
  # since he has to be divisible by all primes bellow n
  # ill start by gettin the minimun num divisible by all them
  primes = []
  n.times do |i|
    if isItPrime?(i)
      primes.push i
    end
  end
  num = 1
  primes.each do |i|
    num *=i
  end
  # incrementing by the product of all primes (it needs to be a multiple of it)
  inc = num
  begin
    num += inc
    found = true
    i=2
    # simple optimization
    # since 4 == 2*2 and 6 == 3*2 no point in checking
    # for divisors bellow 5
    if n>=6
      i = 5
    end
    begin
      if num%(i) != 0
        found = false
      end
      i +=1
    end while i< n && found
  end while !found

  return num
end


# p5 tests
#
# test(fn = method(:p5), 10, 2520, "Prob5 - base test")
# test(fn = method(:p5), 20, 232792560, "Prob5 - test question")

#p6
def p6(n)
  ssq = 0
  sum = 0
  sqs = 0
  n1 = n
  n2 = n
  while n1>0
    ssq += n1*n1
    n1-=1
  end
  while n2>0
    sum += n2
    n2-=1
  end
  sqs = sum * sum
  return sqs - ssq
end
# p6 tests
# test(fn = method(:p6), 10, 2640, "Prob6 - base test")
# test(fn = method(:p6), 100, 25164150, "Prob6 - base test")

# p7
def p7(n)
  if n==1
    return 2
  end
  if n==2
    return 3
  end
  if n==3
    return 5
  end
  if n>3
    primeCand = 5
    primeOrder = 3
    begin
      begin
        primeCand +=2
        notPrime = false
        if primeCand%2 == 0 || primeCand%3 == 0
          notPrime = true
        else
          divisor = (primeCand/2).floor
          if divisor%2 ==0
            divisor +=1
          end
          begin
            if primeCand%divisor == 0
              notPrime = true
            end
            divisor-=2
          end while divisor >=5 && !notPrime
        end
      end while notPrime
      primeOrder +=1
    end while primeOrder < n
    return primeCand
  end
  return 0
end
#
# test(fn = method(:p7), 2, 3, "Prob7 - base test")
# test(fn = method(:p7), 6, 13, "Prob7 - base test")
# test(fn = method(:p7), 10001, 104743, "Prob7 - test")

# p8

def p8 n
  series = "73167176531330624919225119674426574742355349194934"
  series +="96983520312774506326239578318016984801869478851843"
  series +="85861560789112949495459501737958331952853208805511"
  series +="12540698747158523863050715693290963295227443043557"
  series +="66896648950445244523161731856403098711121722383113"
  series +="62229893423380308135336276614282806444486645238749"
  series +="30358907296290491560440772390713810515859307960866"
  series +="70172427121883998797908792274921901699720888093776"
  series +="65727333001053367881220235421809751254540594752243"
  series +="52584907711670556013604839586446706324415722155397"
  series +="53697817977846174064955149290862569321978468622482"
  series +="83972241375657056057490261407972968652414535100474"
  series +="82166370484403199890008895243450658541227588666881"
  series +="16427171479924442928230863465674813919123162824586"
  series +="17866458359124566529476545682848912883142607690042"
  series +="24219022671055626321111109370544217506941658960408"
  series +="07198403850962455444362981230987879927244284909188"
  series +="84580156166097919133875499200524063689912560717606"
  series +="05886116467109405077541002256983155200055935729725"
  series +="71636269561882670428252483600823257530420752963450"
  seriesN = [];
  series.split("").each { |c| seriesN.push c.to_i}
  sLength = seriesN.length
  count = 0
  maxMult = 0
  while count<=sLength-n
    mult = 1
    if(seriesN[count] != 0)
      for i in 0...n
        mult *= seriesN[count+i]
      end
      if maxMult<mult
        maxMult=mult
      end
    end
    count +=1
  end
  return maxMult
end

test(fn = method(:p8), 4, 5832, "Prob8 - base test")
test(fn = method(:p8), 13, 23514624000, "Prob8 - test")
