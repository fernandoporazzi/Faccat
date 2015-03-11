// Author: Fernando Porazzi
// Running this source:
//      $ go run fibonacci.go

package main

import(
        "fmt"
)

func isValid(n int) bool {
        if n == 1 || n == 2 {
                return false
        } else {
                return true
        }
}

func fibIterative(n int) int {
        if x := isValid(n); x == false {
                return 1
        } else {
                j, k, t := 1, 0, 0

                for i := 1; i < n; i++ {
                        t = j
                        j = j + k
                        k = t
                }

                return j
        }
}

func fibRecursive(n int) int {
        if x := isValid(n); x == false {
                return 1
        } else {
                return fibRecursive(n - 1) + fibRecursive(n - 2)
        }
}

func main() {
        var n int

        fmt.Printf("Welcome to this f*cking cool Fibonacci program!")
        fmt.Printf("\n\n")
        fmt.Printf("Type a number and we will give you the Fibonacci value to that number: ")

        fmt.Scanf("%d", &n)

        fmt.Printf("\n\n")
        fmt.Printf("Iterative returned: %d", fibIterative(n))
        fmt.Printf("\n\n")
        fmt.Printf("Recursive returned: %d", fibRecursive(n))
        fmt.Printf("\n\n\n")
}
