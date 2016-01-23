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

test(fn = method(:p1), 10, 23, "Prob1 - base test")
test(fn = method(:p1), 1000, 233168, "Prob1 - test question")

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

test(fn = method(:p2), 89, 44, "Prob2 - base test")
test(fn = method(:p2), 4000000, 4613732, "Prob2 - test question")

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

# test(fn = method(:isItPrime?), 2, true, "prime test")
# test(fn = method(:isItPrime?), 29, true, "prime test")
# test(fn = method(:isItPrime?), 15, false, "prime test")
# test(fn = method(:isItPrime?), 997, true, "prime test")
# test(fn = method(:isItPrime?), 13195, false, "prime test")

test(fn = method(:p3), 13195, 29, "Prob3 - base test")
test(fn = method(:p3), 600851475143, 6857, "Prob3 - test question")
